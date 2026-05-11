import markdown
import bs4
from pathlib import Path
from typing import cast
from bs4.element import Tag
from datetime import date as Date
import json
import sys
import shutil
import re

SCRIPT_DIR = Path(__file__).resolve().parent
ROOT_DIR = SCRIPT_DIR.parent

BASE_URL = "https://yoni13.github.io"
SITEMAP_PATH = ROOT_DIR / "sitemap.xml"

POSTS_METADATA_PATH = ROOT_DIR / "posts" / "post.json"
GENERATED_POSTS_DIR = ROOT_DIR / "posts"
STATIC_IMAGES_DIR = ROOT_DIR / "static" / "images"
MARKDOWNS_DIR = ROOT_DIR / "markdowns"
INDEX_HTML_PATH = ROOT_DIR / "index.html"
INDEX_POSTS_DIV_ID = "indexposts"

ASCII_BANNER = r"""
    _                           _                         _       _     _
    | |                         | |                       ( )     | |   | |
    | | ___  __ _  ___ _ __   __| |_   _  __ _ _ __   __ _|/ ___  | |__ | | ___   __ _
    | |/ _ \/ _` |/ _ \ '_ \ / _` | | | |/ _` | '_ \ / _` | / __| | '_ \| |/ _ \ / _` |
    | |  __/ (_| |  __/ | | | (_| | |_| | (_| | | | | (_| | \__ \ | |_) | | (_) | (_| |
    |_|\___|\__, |\___|_| |_|\__,_|\__, |\__,_|_| |_|\__, | |___/ |_.__/|_|\___/ \__, |
             __/ |                  __/ |             __/ |                       __/ |
            |___/                  |___/             |___/                       |___/
"""

HTML_HEADER_TEMPLATE = """\
<!DOCTYPE html>
<html lang="en">
<head>
    <title>{title} | Legendyang's Blog</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="{subtitle}">
    <link rel="stylesheet" href="/static/index.css">
</head>
<body>
<header>
<a href="/" style="text-decoration: none;"><pre aria-hidden="true">{banner}</pre></a>
</header>
<main>
<article>
"""

HTML_FOOTER = """\
</article>
</main>
</body>
</html>
"""


def load_metadata() -> dict:
    try:
        with open(POSTS_METADATA_PATH, "r", encoding="utf-8") as f:
            return json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        return {"num_posts": 0, "posts": []}


def save_metadata(meta: dict) -> None:
    with open(POSTS_METADATA_PATH, "w", encoding="utf-8") as f:
        json.dump(meta, f, ensure_ascii=False, indent=4)


def parse_markdown(markdown_path: Path) -> tuple[bs4.BeautifulSoup, str, str, str]:
    """Convert a markdown file to a BeautifulSoup object and extract metadata."""
    content = markdown_path.read_text(encoding="utf-8")
    html_body = markdown.markdown(content, extensions=["fenced_code"])
    soup = bs4.BeautifulSoup(html_body, "html.parser")

    title_tag = soup.find("h1")
    if not isinstance(title_tag, Tag):
        print("Error: <h1> (# Title) not found in markdown.")
        sys.exit(1)

    date_tag = soup.find("h5")
    if not isinstance(date_tag, Tag):
        print("Error: <h5> (##### Date) not found in markdown.")
        sys.exit(1)

    subtitle_tag = soup.find("h6")
    if not isinstance(subtitle_tag, Tag):
        print("Error: <h6> (###### Subtitle) not found in markdown.")
        sys.exit(1)

    return soup, title_tag.get_text(strip=True), subtitle_tag.get_text(strip=True), date_tag.get_text(strip=True)


def process_images(soup: bs4.BeautifulSoup, post_id: int, markdown_path: Path) -> None:
    """Copy images from markdown directory to static/images/{id}/ and update src attributes."""
    images_dir = STATIC_IMAGES_DIR / str(post_id)
    images_dir.mkdir(parents=True, exist_ok=True)

    for idx, img_tag in enumerate(cast(list[Tag], soup.find_all("img")), start=1):
        src_val = img_tag.get("src")
        if not src_val or isinstance(src_val, list):
            continue

        src = str(src_val)
        if src.startswith("/static/"):
            # Already processed in a previous run — leave it alone.
            continue

        original_path = (markdown_path.parent / src).resolve()
        if not original_path.is_file():
            # Image was already moved on first generation — look for it in static.
            existing = sorted((STATIC_IMAGES_DIR / str(post_id)).glob(f"img{idx}.*"))
            if existing:
                img_tag["src"] = f"/static/images/{post_id}/{existing[0].name}"
                print(f"  -> image already at '/static/images/{post_id}/{existing[0].name}'")
            else:
                print(f"  Warning: image not found at '{original_path}', skipping.")
            continue

        new_filename = f"img{idx}{original_path.suffix}"
        dest_path = images_dir / new_filename
        web_path = f"/static/images/{post_id}/{new_filename}"

        try:
            shutil.copy2(original_path, dest_path)
            img_tag["src"] = web_path
            print(f"  -> image: '{src}' → '{web_path}'")
            if original_path.resolve() != dest_path.resolve():
                try:
                    original_path.unlink()
                except Exception as e:
                    print(f"  Warning: could not remove '{original_path}': {e}")
        except Exception as e:
            print(f"  Warning: could not copy '{src}': {e}")


def generate_post(markdown_path: Path, post_id: int) -> dict:
    """Generate a post HTML file from a markdown file. Returns post metadata dict."""
    print(f"Generating post {post_id} from '{markdown_path.name}'...")

    soup, title, subtitle, date = parse_markdown(markdown_path)
    process_images(soup, post_id, markdown_path)

    header = HTML_HEADER_TEMPLATE.format(title=title, subtitle=subtitle, banner=ASCII_BANNER)
    full_html = header + str(soup) + HTML_FOOTER

    final_soup = bs4.BeautifulSoup(full_html, "html.parser")
    output_path = GENERATED_POSTS_DIR / f"{post_id}.html"
    output_path.write_text(cast(str, final_soup.prettify()), encoding="utf-8")
    print(f"  -> wrote '{output_path}'")

    return {"POSTID": post_id, "Title": title, "Subtitle": subtitle, "Date": date}


def rebuild_index(posts: list[dict]) -> None:
    """Rebuild index.html from scratch using the given list of post metadata dicts."""
    print("Rebuilding index.html...")

    index_html = ROOT_DIR / "index.html"
    with open(index_html, "r", encoding="utf-8") as f:
        index_soup = bs4.BeautifulSoup(f, "html.parser")

    posts_div = index_soup.find(id=INDEX_POSTS_DIV_ID)
    if not isinstance(posts_div, Tag):
        print(f"Error: element id='{INDEX_POSTS_DIV_ID}' not found in index.html.")
        return

    # Clear existing post entries (keep the div itself).
    posts_div.clear()

    # Insert posts newest-first (highest ID first).
    for post in sorted(posts, key=lambda p: p["POSTID"], reverse=True):
        hr = index_soup.new_tag("hr")
        div = index_soup.new_tag("div")

        h2 = index_soup.new_tag("h2")
        h2.string = post["Title"]

        h6 = index_soup.new_tag("h6")
        h6.string = post.get("Subtitle", "")

        h4 = index_soup.new_tag("h4")
        h4.string = post.get("Date", "")

        a = index_soup.new_tag("a", href=f"/posts/{post['POSTID']}.html")
        a.string = "Read more"

        div.extend([h2, h6, h4, a, index_soup.new_tag("br")])
        posts_div.extend([hr, div])

    posts_div.append(index_soup.new_tag("hr"))
    posts_div.append(index_soup.new_tag("br"))

    with open(index_html, "w", encoding="utf-8") as f:
        f.write(cast(str, index_soup.prettify()))
    print("  -> index.html updated.")


def _parse_post_date(raw: str) -> str:
    """Convert 'YYYY/M/D' to 'YYYY-MM-DD', falling back to today on parse failure."""
    try:
        parts = raw.strip().split("/")
        return Date(int(parts[0]), int(parts[1]), int(parts[2])).isoformat()
    except Exception:
        return Date.today().isoformat()


def generate_sitemap(posts: list[dict]) -> None:
    """Write sitemap.xml to the repo root."""
    today = Date.today().isoformat()

    urls: list[str] = []

    # Home page — always today's date as lastmod.
    urls.append(f"  <url>\n    <loc>{BASE_URL}/</loc>\n    <lastmod>{today}</lastmod>\n  </url>")

    for post in sorted(posts, key=lambda p: p["POSTID"]):
        loc = f"{BASE_URL}/posts/{post['POSTID']}.html"
        lastmod = _parse_post_date(post.get("Date", ""))
        urls.append(f"  <url>\n    <loc>{loc}</loc>\n    <lastmod>{lastmod}</lastmod>\n  </url>")

    xml = (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        + "\n".join(urls)
        + "\n</urlset>\n"
    )

    SITEMAP_PATH.write_text(xml, encoding="utf-8")
    print(f"  -> wrote '{SITEMAP_PATH}'")


def markdown_post_id(path: Path) -> int | None:
    """Extract the leading post ID from a markdown filename like '2-slug.md'."""
    m = re.match(r"^(\d+)", path.stem)
    return int(m.group(1)) if m else None


def cmd_add(markdown_path: Path) -> None:
    meta = load_metadata()
    post_id = meta.get("num_posts", 0) + 1

    post_meta = generate_post(markdown_path, post_id)

    # Update metadata JSON.
    while len(meta["posts"]) < post_id:
        meta["posts"].append(None)
    meta["posts"][post_id - 1] = post_meta
    meta["num_posts"] = post_id
    save_metadata(meta)

    rebuild_index(meta["posts"])
    generate_sitemap([p for p in meta["posts"] if p])
    print("--- Done ---")


def cmd_regen() -> None:
    md_files = sorted(
        [p for p in MARKDOWNS_DIR.glob("*.md") if markdown_post_id(p) is not None],
        key=lambda p: markdown_post_id(p),  # type: ignore[arg-type]
    )

    if not md_files:
        print("No markdown files found in markdowns/.")
        return

    all_posts: list[dict] = []
    for md_path in md_files:
        post_id = markdown_post_id(md_path)
        assert post_id is not None
        post_meta = generate_post(md_path, post_id)
        all_posts.append(post_meta)

    # Rebuild metadata JSON.
    max_id = max(p["POSTID"] for p in all_posts)
    posts_list: list[dict | None] = [None] * max_id
    for p in all_posts:
        posts_list[p["POSTID"] - 1] = p
    meta = {"num_posts": max_id, "posts": posts_list}
    save_metadata(meta)

    rebuild_index(all_posts)
    generate_sitemap(all_posts)
    print(f"--- Regenerated {len(all_posts)} posts ---")


# ── Entry point ──────────────────────────────────────────────────────────────

if len(sys.argv) < 2:
    print(f"Usage:")
    print(f"  uv run {Path(__file__).name} <markdown_file>   # add a new post")
    print(f"  uv run {Path(__file__).name} --regen           # regenerate all posts")
    sys.exit(1)

if sys.argv[1] == "--regen":
    cmd_regen()
else:
    md = Path(sys.argv[1]).resolve()
    if not md.is_file():
        print(f"Error: '{md}' not found.")
        sys.exit(1)
    cmd_add(md)
