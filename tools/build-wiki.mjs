// tools/build-wiki.mjs
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { marked } from "marked";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.resolve(__dirname, "..");
const WIKI_SRC_DIR = path.join(ROOT, "wiki-src");
const WIKI_OUT_DIR = path.join(ROOT, "wiki");
const LAYOUT_PATH = path.join(WIKI_OUT_DIR, "layout.html");

// For now: EN only, one page
const PAGES = [
  {
    id: "tutorial",
    lang: "en",
    src: "tutorial.md",
    out: "tutorial.html",
  },
];

async function loadLayout() {
  const html = await fs.readFile(LAYOUT_PATH, "utf8");
  if (!html.includes("{{CONTENT}}")) {
    throw new Error("wiki/layout.html is missing the {{CONTENT}} placeholder");
  }
  return html;
}

async function buildPage(layout, page) {
  const srcPath = path.join(WIKI_SRC_DIR, page.lang, page.src);
  const outPath = path.join(WIKI_OUT_DIR, page.out);

  let md;
  try {
    md = await fs.readFile(srcPath, "utf8");
  } catch (err) {
    console.error(`❌ Cannot read ${srcPath}:`, err.message);
    return;
  }

  const bodyHtml = marked.parse(md);

  const finalHtml = layout.replace("{{CONTENT}}", bodyHtml);

  await fs.writeFile(outPath, finalHtml, "utf8");
  console.log(`✅ Built ${outPath}`);
}

async function main() {
  try {
    const layout = await loadLayout();
    for (const page of PAGES) {
      await buildPage(layout, page);
    }
  } catch (err) {
    console.error("Build failed:", err);
    process.exitCode = 1;
  }
}

main();