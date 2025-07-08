import markdown
import bs4
# This is to ask vscode to shutup about typing errors
from pathlib import Path
from typing import cast
from bs4.element import Tag
import json
import sys
import shutil

SCRIPT_DIR = Path(__file__).resolve().parent
ROOT_DIR = SCRIPT_DIR.parent

POSTS_METADATA_PATH = ROOT_DIR / "posts" / "post.json"
GENERATED_POSTS_DIR = ROOT_DIR / "posts"
STATIC_IMAGES_DIR = ROOT_DIR / "static" / "images"
INDEX_HTML_PATH = ROOT_DIR / "index.html"
INDEX_POSTS_DIV_ID = "indexposts"

HTML_HEADER_TEMPLATE = r"""
<!DOCTYPE html>
<html lang="en">
<head>
    <title>{title} | Legendyang's Blog</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/static/index.css">
</head>

<body>
<a href="/" style="text-decoration: none;">
<pre>
    _                           _                         _       _     _
    | |                         | |                       ( )     | |   | |
    | | ___  __ _  ___ _ __   __| |_   _  __ _ _ __   __ _|/ ___  | |__ | | ___   __ _
    | |/ _ \/ _` |/ _ \ '_ \ / _` | | | |/ _` | '_ \ / _` | / __| | '_ \| |/ _ \ / _` |
    | |  __/ (_| |  __/ | | | (_| | |_| | (_| | | | | (_| | \__ \ | |_) | | (_) | (_| |
    |_|\___|\__, |\___|_| |_|\__,_|\__, |\__,_|_| |_|\__, | |___/ |_.__/|_|\___/ \__, |
             __/ |                  __/ |             __/ |                       __/ |
            |___/                  |___/             |___/                       |___/
</pre>
</a>
"""


if len(sys.argv) < 2:
    print(f"Usage: uv run {Path(__file__).name} <markdown_file_path>")
    sys.exit(1)

markdown_file_path = Path(sys.argv[1]).resolve()
if not markdown_file_path.is_file():
    print(f"Error: File '{markdown_file_path}' not found.")
    sys.exit(1)

print(f"Processing markdown file: {markdown_file_path.name}")


try:
    with open(POSTS_METADATA_PATH, "r", encoding="utf-8") as f:
        posts_metadata = json.load(f)
except (FileNotFoundError, json.JSONDecodeError):
    posts_metadata = {"num_posts": 0, "posts": []}
    print("Warning: post.json not found or invalid. Starting from scratch.")

POST_ID = posts_metadata.get("num_posts", 0) + 1
print(f"Assigning new Post ID: {POST_ID}")


with open(markdown_file_path, 'r', encoding='utf-8') as file:
    markdown_content = file.read()

html_body_content = markdown.markdown(markdown_content)
soup = bs4.BeautifulSoup(html_body_content, "html.parser")

title_tag = soup.find("h1")
if not isinstance(title_tag, Tag):
    print("Error: <h1> tag for the post title was not found in the markdown file.")
    sys.exit(1)
post_title = title_tag.get_text(strip=True)

date_tag = soup.find("h5")
if not isinstance(date_tag, Tag):
    print("Error: <h5> tag for the post date was not found in the markdown file.")
    sys.exit(1)
post_date = date_tag.get_text(strip=True)

subtitle_tag = soup.find("h6")
if not isinstance(subtitle_tag, Tag):
    print("Error: <h6> tag for the post subtitle was not found in the markdown file.")
    sys.exit(1)
post_subtitle = subtitle_tag.get_text(strip=True)

print(f"Extracted Title: '{post_title}'")


new_post_images_dir = STATIC_IMAGES_DIR / str(POST_ID)
new_post_images_dir.mkdir(parents=True, exist_ok=True)

img_tags = cast(list[Tag], soup.find_all("img"))
for idx, img_tag in enumerate(img_tags, start=1):
    original_src_val = img_tag.get("src")
    if not original_src_val or isinstance(original_src_val, list):
        print(f"Warning: Found an <img> tag with an invalid 'src' attribute: {original_src_val}. Skipping.")
        continue
    
    original_src = str(original_src_val)
    original_image_path = markdown_file_path.parent / original_src

    if not original_image_path.is_file():
        print(f"Warning: Image file not found at '{original_image_path}'. Skipping.")
        continue

    new_image_filename = f"img{idx}{original_image_path.suffix}"
    new_image_path_fs = new_post_images_dir / new_image_filename
    new_image_path_web = f"/static/images/{POST_ID}/{new_image_filename}"

    try:
        shutil.copy2(original_image_path, new_image_path_fs)
        img_tag["src"] = new_image_path_web
        print(f"  -> Processed image: '{original_src}' -> '{new_image_path_web}'")

        if original_image_path.resolve() != new_image_path_fs.resolve():
            try:
                original_image_path.unlink()
                print(f"  -> Removed old image: '{original_image_path}'")
            except Exception as e:
                print(f"Warning: Could not remove old image '{original_image_path}': {e}")
    except Exception as e:
        print(f"Warning: Could not copy image '{original_src}': {e}")


final_header = HTML_HEADER_TEMPLATE.format(title=post_title)
full_html_string = final_header + str(soup) + "\n</body>\n</html>"

final_soup = bs4.BeautifulSoup(full_html_string, "html.parser")

prettified_html = cast(str, final_soup.prettify())

output_html_path = GENERATED_POSTS_DIR / f"{POST_ID}.html"
output_html_path.parent.mkdir(parents=True, exist_ok=True)
with open(output_html_path, "w", encoding="utf-8") as file:
    file.write(prettified_html)

print(f"Successfully converted markdown to '{output_html_path}'")


print("Updating index.html...")
try:
    with open(INDEX_HTML_PATH, "r", encoding="utf-8") as f:
        index_soup = bs4.BeautifulSoup(f, "html.parser")

    index_posts_div = index_soup.find(id=INDEX_POSTS_DIV_ID)
    if isinstance(index_posts_div, Tag):
        new_post_div = index_soup.new_tag("div", attrs={"class": "post-summary"})
        
        title_h2 = index_soup.new_tag("h2"); title_h2.string = post_title
        subtitle_h6 = index_soup.new_tag("h6"); subtitle_h6.string = post_subtitle
        date_h4 = index_soup.new_tag("h4"); date_h4.string = post_date
        read_more_a = index_soup.new_tag("a", href=f"/posts/{POST_ID}.html", style="color: inherit;"); read_more_a.string = "Read more"

        new_post_div.extend([title_h2, subtitle_h6, date_h4, read_more_a, index_soup.new_tag("br")])
        
        index_posts_div.insert(0, new_post_div)
        
        if POST_ID > 1:
            new_post_div.insert_after(index_soup.new_tag("hr"))
        
        with open(INDEX_HTML_PATH, 'w', encoding='utf-8') as file:
            file.write(cast(str, index_soup.prettify()))
        print("Successfully updated index.html.")
    else:
        print(f"Warning: Could not find element with id='{INDEX_POSTS_DIV_ID}' in index.html. Skipping update.")
except FileNotFoundError:
    print(f"Error: {INDEX_HTML_PATH} not found. Cannot update index.")


print("Updating post metadata JSON...")
new_post_record = {"POSTID": POST_ID, "Title": post_title}

while len(posts_metadata["posts"]) < POST_ID:
    posts_metadata["posts"].append(None)

posts_metadata["posts"][POST_ID - 1] = new_post_record
posts_metadata["num_posts"] = POST_ID

with open(POSTS_METADATA_PATH, "w", encoding="utf-8") as json_file:
    json.dump(posts_metadata, json_file, ensure_ascii=False, indent=4)

print("Post metadata updated successfully.")
print("--- Script finished ---")