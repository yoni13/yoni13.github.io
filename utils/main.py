import markdown
import bs4
import os
import json
import sys

if len(sys.argv) < 2:
    print("Usage: uv run main.py <markdown_file_path>")
    sys.exit(1)

markdown_file_path = sys.argv[1]

if not os.path.exists(markdown_file_path):
    print(f"Error: File '{markdown_file_path}' not found")
    sys.exit(1)


with open("../posts/post.json", "r", encoding="utf-8") as f:
    posts_json = json.load(f)

POSTID = posts_json["num_posts"] + 1


with open(markdown_file_path, 'r', encoding='utf-8') as file:
    markdown_content = file.read()


html_content = markdown.markdown(markdown_content)
soup = bs4.BeautifulSoup(html_content, "html.parser")



img_tags = [tag for tag in soup.find_all("img") if isinstance(tag, bs4.element.Tag)]
for idx, img in enumerate(img_tags, start=1):
    src = img.get("src") or ""
    src_str = str(src)

    ext = os.path.splitext(src_str)[1] if '.' in src_str else ''
    ext = ext if ext.startswith('.') else ('.' + ext if ext else '')

    old_img_path = os.path.join(os.path.dirname(markdown_file_path), src_str)
    new_img_dir = f"../static/images/{POSTID}"
    os.makedirs(new_img_dir, exist_ok=True)
    new_img_filename = f"img{idx}{ext}"
    new_img_path = os.path.join(new_img_dir, new_img_filename)
    try:
        if os.path.exists(old_img_path):
            if os.path.abspath(old_img_path) != os.path.abspath(new_img_path):
                with open(old_img_path, "rb") as fsrc, open(new_img_path, "wb") as fdst:
                    fdst.write(fsrc.read())
    except Exception as e:
        print(f"Warning: Could not move image {src_str} to {new_img_path}: {e}")

    new_src = f"/static/images/{POSTID}/img{idx}{ext}"
    img.attrs['src'] = new_src

h1_tags_title = soup.find("h1")
title = h1_tags_title

date = soup.find("h5")
sub_title = soup.find("h6")


HTML_HEADER = r"""
<!DOCTYPE html>
<head>
    <title>Legendyang's Blog</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/static/index.css">
</head>

<body>
<a href="/" style="text-decoration: none; color: inherit;">
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
"""




if title is not None:
    header_soup = bs4.BeautifulSoup(HTML_HEADER, "html.parser")
    title_tag = header_soup.find("title")
    if title_tag:
        title_tag.string = title.get_text() + " | legendyang's Blog"

    HTML_HEADER = str(header_soup)
html_content = HTML_HEADER + str(soup) + "</body>"

output_html_path = f"../posts/{POSTID}.html"
os.makedirs(os.path.dirname(output_html_path), exist_ok=True)
html_content = bs4.BeautifulSoup(html_content, "html.parser").prettify()

with open(output_html_path, 'w', encoding='utf-8') as file:
    file.write(html_content)

print(f"Successfully converted {markdown_file_path} to {output_html_path}")

print("Start adding posts to index.html")

with open("../index.html", "r", encoding="utf-8") as f:
    index_html_content = f.read()

soup = bs4.BeautifulSoup(index_html_content, "html.parser")
spliter = soup.new_string("----------------------------------------------")
new_spliter = soup.new_string("----------------------------------------------")

indexposts = soup.find(id="indexposts")
if indexposts is not None:
    # Create new post block
    new_post = soup.new_tag("div")


    blogtitle = soup.new_tag("h2")
    blogtitle.string = title.get_text()
    blogsubtitle = soup.new_tag("h6")
    blogsubtitle.string = sub_title.get_text()
    blogdate = soup.new_tag("h4")
    blogdate.string = date.get_text()
    blogatag = soup.new_tag("a", href=f"/posts/{POSTID}.html", style="color: inherit;")
    blogatag.string = "Read more"
    new_post.append(blogtitle)
    new_post.append(blogsubtitle)
    new_post.append(blogdate)
    new_post.append(blogatag)
    new_post.append(soup.new_tag("br"))


    if POSTID == 1:
        indexposts.insert(0, soup.new_tag("br"))
    indexposts.insert(0, spliter)
    indexposts.insert(0, new_post)
    indexposts.insert(0, new_spliter)
html_content = bs4.BeautifulSoup(str(soup), "html.parser").prettify()

with open("../index.html", 'w', encoding='utf-8') as file:
    file.write(html_content)

print("Done adding posts to index.html")

# Ensure "posts" key exists and is a list
if "posts" not in posts_json or not isinstance(posts_json["posts"], list):
    posts_json["posts"] = []

# Expand the list if needed
while len(posts_json["posts"]) < POSTID:
    posts_json["posts"].append({})

posts_json["posts"][POSTID-1] = {
    "POSTID": POSTID,
    "Title": blogtitle.get_text()
}
posts_json["num_posts"] = POSTID

with open("../posts/post.json", "w", encoding="utf-8") as json_file:
    json.dump(posts_json, json_file, ensure_ascii=False, indent=4)
