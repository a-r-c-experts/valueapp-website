// tools/build-wiki.mjs
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { marked } from "marked";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.resolve(__dirname, "..");
const SRC_DIR = path.join(ROOT, "wiki-src");
const OUT_DIR = path.join(ROOT, "wiki");

const HEADER_PARTIAL = path.join(OUT_DIR, "partials", "header.html");
const FOOTER_PARTIAL = path.join(OUT_DIR, "partials", "footer.html");

const GENERATED_PAGES_OUT = path.join(OUT_DIR, "wiki-generated-pages.js");

function isoDateFromMtime(filePath) {
  const mtime = fs.statSync(filePath).mtime;
  const yyyy = mtime.getFullYear();
  const mm = String(mtime.getMonth() + 1).padStart(2, "0");
  const dd = String(mtime.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function parseFrontMatter(raw) {
  const lines = raw.split(/\r?\n/);
  if (lines[0].trim() !== '---') {
    // no front matter
    return { meta: {}, body: raw };
  }

  let i = 1;
  const meta = {};

  for (; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line === '---') {
      i++; // skip closing ---
      break;
    }
    if (!line) continue;
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    meta[key] = value;
  }

  const body = lines.slice(i).join('\n');
  return { meta, body };
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function loadPartial(p, fallback = "") {
  try {
    return fs.readFileSync(p, "utf8");
  } catch {
    return fallback;
  }
}

const headerHtml = loadPartial(
  HEADER_PARTIAL,
  "<header><div class='top-bar'>Missing header.html</div></header>"
);
const footerHtml = loadPartial(
  FOOTER_PARTIAL,
  "<footer><div class='footer-inner'>Missing footer.html</div></footer>"
);

// Super simple HTML shell for all wiki pages
function renderHtml({ lang, slug, bodyHtml }) {
  const pageTitle = `ValueApp Wiki – ${slug}`;
  const description =
    "ValueApp user documentation for planners and clients (wiki page).";

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8" />
  <title>${pageTitle}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="${description}" />
  <link rel="icon" type="image/png" href="/favicon.png" />
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  ${headerHtml}

  <main class="wiki-main">
    <div class="wiki-layout">
      <aside class="wiki-toc" id="wikiToc"></aside>
      <section class="wiki-section wiki-content">
${bodyHtml}
      </section>
    </div>
  </main>

  ${footerHtml}

  <script src="/partials.js"></script>
  <script src="/wiki/wiki-version.js"></script>

  <!-- generated list of markdown pages -->
  <script src="/wiki/wiki-generated-pages.js"></script>

  <script src="/wiki/wiki-page-config.js"></script>
  <script src="/wiki/wiki-last-updated.js"></script>
  <script src="/wiki/search.js"></script>
  <script src="/wiki/toc.js"></script>
  <script src="/wiki/wiki-toc-mobile.js"></script>

  <script type="module" src="/i18n/lang-loader.js"></script>
  <script src="/lang.js"></script>
</body>
</html>
`;
}

function buildAllWikiPages() {
  console.log("Building wiki from:", SRC_DIR);

  const langs = fs.readdirSync(SRC_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  if (langs.length === 0) {
    console.warn("No language folders found in wiki-src/");
    return;
  }

  const generatedMap = new Map(); // key: slug, value: page object with urlByLang

  for (const lang of langs) {
    const langSrcDir = path.join(SRC_DIR, lang);
    const langOutDir = path.join(OUT_DIR, lang);
    ensureDir(langOutDir);

    const files = fs.readdirSync(langSrcDir).filter((f) => f.endsWith(".md"));

    if (files.length === 0) {
      console.warn(`No .md files found in wiki-src/${lang}`);
      continue;
    }

    console.log(`\n=== ${lang} ===`);

    for (const filename of files) {
      const slug = filename.replace(/\.md$/, ""); // tutorial.md → tutorial
      const srcPath = path.join(langSrcDir, filename);
      const outPath = path.join(langOutDir, `${slug}.html`);

      const raw = fs.readFileSync(srcPath, "utf8");

      // extract frontmatter and markdown body
      const { meta, body } = parseFrontMatter(raw);

      // render Markdown content (body only!)
      const bodyHtml = marked.parse(body);

      // ---- NEW: collect generated page metadata for search/nav/last-updated
      const lastUpdated = isoDateFromMtime(srcPath);

      if (!generatedMap.has(slug)) {
        generatedMap.set(slug, {
          id: slug,
          urlByLang: {},
          titleKey: meta.i18nTitle || `wiki.${slug}.title`,
          navKey: meta.navKey || null, // optional in frontmatter
          lastUpdated,
          searchable: true
        });
      }

      const entry = generatedMap.get(slug);
      entry.urlByLang[lang] = `/wiki/${lang}/${slug}.html`;

      // if different languages have different mtimes, keep newest date
      if (lastUpdated > entry.lastUpdated) entry.lastUpdated = lastUpdated;
      // ---- END NEW

      const fullHtml = renderHtml({ lang, slug, bodyHtml });
      fs.writeFileSync(outPath, fullHtml, "utf8");

      console.log(`  ✓ ${lang}/${slug}.html`);
    }
  }

  // ---- NEW: write the generated pages list that wiki-page-config can merge in
  ensureDir(OUT_DIR);

  const generatedPages = Array.from(generatedMap.values()).sort((a, b) =>
    a.id.localeCompare(b.id)
  );

  const js = `// AUTO-GENERATED by tools/build-wiki.mjs. Do not edit by hand.
(function () {
  window.WIKI_GENERATED_PAGES = ${JSON.stringify(generatedPages, null, 2)};
})();\n`;

  fs.writeFileSync(GENERATED_PAGES_OUT, js, "utf8");
  console.log(`\n✓ wrote ${path.relative(ROOT, GENERATED_PAGES_OUT)}`);
  // ---- END NEW

  console.log("\nDone.");
}

buildAllWikiPages();