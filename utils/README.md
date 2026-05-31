## Markdown post language

The generator auto-detects the page language from the post text:

- English posts become `<html lang="en">`
- Traditional Chinese posts become `<html lang="zh-TW">`

To override it, add this HTML comment anywhere in the markdown file:

```markdown
<!-- lang: zh-TW -->
```

Common aliases such as `zhtw`, `zh_tw`, and `zh-Hant` are accepted. For mixed-language posts, set the page language to the primary language, then mark smaller foreign-language spans directly in the markdown with HTML:

```markdown
這段是中文，<span lang="en">this phrase is English</span>。
```
