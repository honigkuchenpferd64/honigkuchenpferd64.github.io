# honigkuchenpferd64 — Site

Personal GitHub Pages site: watch collection tracker + cybersecurity blog.

---

## Deploy to GitHub Pages

1. Create a repo named `honigkuchenpferd64.github.io` on GitHub
2. Upload all files from this folder to the root of the repo
3. In repo **Settings → Pages → Source**, select `main` branch, `/ (root)`
4. Done — live at `https://honigkuchenpferd64.github.io`

---

## File Structure

```
index.html       Homepage (hero + teasers)
collection.html  Current watch collection
wanted.html      Watches on the radar
articles.html    Article index
article.html     Single article (loaded via ?id= query param)
style.css        All shared styles
config.js        ← ALL YOUR CONTENT LIVES HERE
```

---

## Adding Content

Open `config.js`. Everything is a plain JavaScript array — no build tools, no CMS.

### Add a watch to the collection

```js
collection: [
  // existing watches...
  {
    ref:  "REF-123",
    name: "Brand Model Name",
    img:  "https://example.com/watch.jpg"   // or "img/mywatch.jpg"
  }
]
```

Leave `img: ""` to show a clean geometric placeholder.

---

### Add a watch to the wanted list

Same format, inside the `wanted: [...]` array.

---

### Add a new article

```js
articles: [
  // existing articles...
  {
    id:      "my-new-article",           // unique slug — used in the URL
    date:    "2025-06-01",
    tag:     "Web Security",
    title:   "Your Article Title Here",
    excerpt: "One-sentence teaser shown in the list view.",
    img:     "",                         // optional banner image URL
    body:    `
      <p>Your article content as HTML.</p>
      <h3>A Subheading</h3>
      <p>More text. Use <code>inline code</code> like this.</p>
      <pre><code>// Code block example
const x = 1;</code></pre>
    `
  }
]
```

The article is then available at: `article.html?id=my-new-article`

---

## Adding Watch Images

Option A — link directly to an image URL:
```js
img: "https://upload.wikimedia.org/..."
```

Option B — add images to the repo and reference them locally:
```
/img/
  nautilus.jpg
  submariner.jpg
```
```js
img: "img/nautilus.jpg"
```

---

## Customising Style

All visual tokens (colors, fonts) are CSS variables at the top of `style.css`:

```css
:root {
  --bg:         #f2efe6;   /* page background */
  --accent:     #233a28;   /* forest green — used throughout */
  --accent-mid: #3b6241;
  --serif:      'Cormorant Garamond', Georgia, serif;
  --body:       'Lora', Georgia, serif;
}
```

Change `--accent` to shift the entire color accent across all pages instantly.
