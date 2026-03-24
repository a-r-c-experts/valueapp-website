# ValueApp Wiki – Maintenance Guide

## Overview

The ValueApp Wiki is maintained as Markdown source files and generated into static HTML.

### Source
- `wiki-src/<lang>/*.md`

### Generated output
- `wiki/<lang>/*.html`
- `wiki/wiki-generated-pages.js`

### Build script
- `tools/build-wiki.mjs`

---

## How the wiki build works

The build script:

```bash
node tools/build-wiki.mjs
```

does the following:

- scans `wiki-src/` for language folders
- reads all `.md` files in each language folder
- parses simple frontmatter
- converts Markdown to HTML using `marked`
- writes generated pages to `wiki/<lang>/`
- updates `wiki/wiki-generated-pages.js`
- injects shared header and footer from:
  - `wiki/partials/header.html`
  - `wiki/partials/footer.html`

---

## Basic update workflow

### 1. Edit an existing page
Edit the Markdown source file in:

```bash
wiki-src/<lang>/
```

Example:

```bash
wiki-src/en/tutorial.md
wiki-src/de/tutorial.md
wiki-src/fr/tutorial.md
```

### 2. Rebuild the wiki

```bash
node tools/build-wiki.mjs
```

### 3. Check the result
Verify:

- the HTML page was generated in `wiki/<lang>/`
- the page renders correctly
- links work
- search finds the page
- images and videos load correctly

### 4. Commit changes

```bash
git add .
git commit -m "Update wiki content"
git push
```

---

## Adding a new page

### 1. Create a new Markdown file

Example:

```bash
wiki-src/en/new-page.md
```

### 2. Add frontmatter

```md
---
i18nTitle: wiki.newPage.title
navKey: wiki.nav.newPage
---

# New page
```

Keep frontmatter simple (key: value only).

### 3. Add translations

Example:

```js
"wiki.newPage.title": "New page"
```

### 4. Rebuild

```bash
node tools/build-wiki.mjs
```

### 5. Check generated output

```bash
wiki/en/new-page.html
```

---

## Adding a new language

### 1. Create a new folder

```bash
wiki-src/it/
```

### 2. Copy content

```bash
cp -r wiki-src/en/* wiki-src/it/
```

### 3. Translate content

### 4. Add translation keys

Update your i18n dictionary.

### 5. Update UI (if needed)

```html
<button class="lang-option" data-lang="it">IT</button>
```

### 6. Rebuild

```bash
node tools/build-wiki.mjs
```

---

## Frontmatter format

Supported:

```md
---
i18nTitle: wiki.tutorial.title
navKey: wiki.nav.tutorial
---
```

Not supported:

- nested YAML
- arrays
- multiline values

---

## Shared layout files

Edit:

```bash
wiki/partials/header.html
wiki/partials/footer.html
```

---

## Search

Depends on:

```bash
wiki/wiki-generated-pages.js
```

If search fails:
- run build again

---

## Linking pages

```html
<a href="#" data-wiki-link="tutorial.html">
```

---

## Media

Store in:

```bash
/wiki-assets/
```

Example:

```md
![Example](/wiki-assets/tutorial/example.jpeg)
```

---

## Common problems

- Page missing → forgot build
- Link broken → wrong filename
- Translation missing → key not added
- Search broken → rebuild

---

## One-line reminder

```bash
node tools/build-wiki.mjs
```

If something is broken, start here.
