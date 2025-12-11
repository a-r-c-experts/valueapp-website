// tools/check-i18n.mjs
import { contentEn } from "../i18n/en.js";
import { contentDe } from "../i18n/de.js";

function findMissingKeys(source, target) {
  const missing = [];

  for (const key of Object.keys(source)) {
    if (!(key in target)) {
      missing.push(key);
    }
  }

  return missing;
}

function main() {
  const missingInDe = findMissingKeys(contentEn, contentDe);

  if (!missingInDe.length) {
    console.log("✅ DE is complete relative to EN.");
    return;
  }

  console.log("⚠️ Missing DE translations for these keys:\n");
  for (const key of missingInDe) {
    console.log("-", key);
  }

  process.exitCode = 1;
}

main();