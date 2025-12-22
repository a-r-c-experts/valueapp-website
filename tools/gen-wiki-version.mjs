// tools/gen-wiki-version.mjs
import { execSync } from "node:child_process";
import fs from "node:fs";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

function sh(cmd) {
  return execSync(cmd, { stdio: ["ignore", "pipe", "ignore"] })
    .toString()
    .trim();
}

// Read package.json version (optional)
const pkg = JSON.parse(fs.readFileSync(join(process.cwd(), "package.json"), "utf8"));
const appVersion = process.env.APP_VERSION || `ValueApp ${pkg.version || "dev"}`;

// Use last git commit date for wikiVersion (better than “today”)
let wikiVersion = "";
try {
  wikiVersion = sh("git log -1 --format=%cs"); // YYYY-MM-DD
} catch {
  wikiVersion = new Date().toISOString().slice(0, 10);
}

let commit = "";
try {
  commit = sh("git rev-parse --short HEAD");
} catch {
  commit = "";
}

const payload = {
  wikiVersion,
  appVersion,
  note: process.env.WIKI_NOTE || "Alpha user wiki",
  commit,
};

const outDir = join(process.cwd(), "wiki"); // matches your OUT_DIR
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "wiki-version.json"), JSON.stringify(payload, null, 2) + "\n");