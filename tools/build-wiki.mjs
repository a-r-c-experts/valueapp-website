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

  <div data-include="/wiki/partials/footer.html"></div>
  <!-- Shared footer -->
  <script src="/partials.js"></script>
  <script src="/wiki/wiki-version.js"></script>
  <script src="/wiki/wiki-page-config.js"></script>
  <script src="/wiki/wiki-last-updated.js"></script>
  <script src="/wiki/search.js"></script>
  <script src="/wiki/toc.js"></script>

  <link rel="stylesheet" href="/styles.css" />
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

  for (const lang of langs) {
    const langSrcDir = path.join(SRC_DIR, lang);
    const langOutDir = path.join(OUT_DIR, lang);
    ensureDir(langOutDir);

    const files = fs.readdirSync(langSrcDir)
      .filter((f) => f.endsWith(".md"));

    if (files.length === 0) {
      console.warn(`No .md files found in wiki-src/${lang}`);
      continue;
    }

    console.log(`\n=== ${lang} ===`);

    for (const filename of files) {
      const slug = filename.replace(/\.md$/, "");   // tutorial.md → tutorial
      const srcPath = path.join(langSrcDir, filename);
      const outPath = path.join(langOutDir, `${slug}.html`);

      const raw = fs.readFileSync(srcPath, "utf8");

      // extract frontmatter and markdown body
      const { meta, body } = parseFrontMatter(raw);

      // render Markdown content (body only!)
      const bodyHtml = marked.parse(body);

      // If you ever want the i18n title/subtitle,
      // meta.i18nTitle and meta.i18nSubtitle are now available.
      const fullHtml = renderHtml({ lang, slug, bodyHtml });
      fs.writeFileSync(outPath, fullHtml, "utf8");

      console.log(`  ✓ ${lang}/${slug}.html`);
    }
  }

  console.log("\nDone.");
}

buildAllWikiPages();