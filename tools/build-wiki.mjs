// tools/build-wiki.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { marked } from "marked";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// repo root = one level up from /tools
const ROOT = path.join(__dirname, "..");

// source MD
const WIKI_SRC_EN = path.join(ROOT, "wiki-src", "en");

// output HTML
const OUT_DIR = path.join(ROOT, "wiki");

// ---------- helpers ----------

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function parseFrontMatter(text) {
  if (!text.startsWith("---")) {
    return { meta: {}, body: text };
  }

  const end = text.indexOf("\n---", 3);
  if (end === -1) {
    return { meta: {}, body: text };
  }

  const rawFm = text.slice(3, end).trim();
  const body = text.slice(end + 4); // skip "\n---"

  const meta = {};
  for (const line of rawFm.split("\n")) {
    const m = line.match(/^(\w+):\s*(.*)$/);
    if (m) {
      meta[m[1]] = m[2];
    }
  }

  return { meta, body };
}

function applyTemplate({ titleText, subtitleText, i18nTitle, i18nSubtitle, contentHtml }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${titleText}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta
    name="description"
    content="Step-by-step tutorial for the ValueApp with screenshots: from project description to summary."
  />
  <link rel="icon" type="image/png" href="/favicon.png" />
  <link rel="stylesheet" href="/styles.css" />
</head>
<body class="wiki-page">
  <div data-include="/wiki/partials/header.html"></div>

  <main class="wiki-main">
    <section class="wiki-page-header">
      <h1 data-i18n="${i18nTitle || ""}">${titleText}</h1>
      ${
        subtitleText
          ? `<p data-i18n="${i18nSubtitle || ""}">${subtitleText}</p>`
          : ""
      }
      <p class="wiki-last-updated" data-last-updated-target></p>
    </section>

    ${contentHtml}
  </main>

  <div data-include="/wiki/partials/footer.html"></div>
  <script src="/partials.js"></script>
  <script src="/wiki/wiki-version.js"></script>
  <script src="/wiki/wiki-page-config.js"></script>
  <script src="/wiki/wiki-last-updated.js"></script>
  <script src="/wiki/search.js"></script>
  <script type="module" src="/i18n/lang-loader.js"></script>
  <script src="/lang.js"></script>
</body>
</html>`;
}

function buildTutorial() {
  const srcPath = path.join(WIKI_SRC_EN, "tutorial.md");
  console.log("Reading:", srcPath);
  const raw = fs.readFileSync(srcPath, "utf8");

  const { meta, body } = parseFrontMatter(raw);
  const htmlBody = marked.parse(body);

  // Take first H1 and first H2 as title & subtitle
  const h1Match = htmlBody.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  const h2Match = htmlBody.match(/<h2[^>]*>([\s\S]*?)<\/h2>/);

  const titleText = h1Match ? h1Match[1].trim() : "Tutorial";
  const subtitleText = h2Match ? h2Match[1].trim() : "";

  let contentHtml = htmlBody;
  if (h1Match) contentHtml = contentHtml.replace(h1Match[0], "");
  if (h2Match) contentHtml = contentHtml.replace(h2Match[0], "");

  const finalHtml = applyTemplate({
    titleText,
    subtitleText,
    i18nTitle: meta.i18nTitle,
    i18nSubtitle: meta.i18nSubtitle,
    contentHtml,
  });

  ensureDir(OUT_DIR);
  const outPath = path.join(OUT_DIR, "tutorial.html");
  fs.writeFileSync(outPath, finalHtml, "utf8");
  console.log("Built:", outPath);
}

// ---------- run ----------

buildTutorial();