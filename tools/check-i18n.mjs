// check-i18n.mjs
// Run from project root:  node check-i18n.mjs

import { contentEn } from "../i18n/en.js";
import { contentDe } from "../i18n/de.js";
import { contentFr } from "../i18n/fr.js";
import { contentIt } from "../i18n/it.js";
import { contentEs } from "../i18n/es.js";
import { contentPt } from "../i18n/pt.js";

// Config: which namespaces we actually expect per language
// "site"  = keys NOT starting with "wiki."
// "wiki"  = keys starting with "wiki."

const LANGS = [
  {
    code: "en",
    label: "English",
    dict: contentEn,
    namespaces: ["site", "wiki"], // canonical: should have everything
  },
  {
    code: "de",
    label: "Deutsch",
    dict: contentDe,
    namespaces: ["site", "wiki"], // main + wiki
  },
  {
    code: "fr",
    label: "Français",
    dict: contentFr,
    namespaces: ["site"], // only main page for now
  },
  {
    code: "it",
    label: "Italiano",
    dict: contentIt,
    namespaces: ["site"],
  },
  {
    code: "es",
    label: "Español",
    dict: contentEs,
    namespaces: ["site"],
  },
  {
    code: "pt",
    label: "Português",
    dict: contentPt,
    namespaces: ["site"],
  },
];

function namespaceOfKey(key) {
  if (key.startsWith("wiki.")) return "wiki";
  return "site";
}

function runCheck() {
  const canonical = contentEn;
  const allKeys = Object.keys(canonical).sort();

  console.log("Canonical language: en");
  console.log(`Total keys in en: ${allKeys.length}\n`);

  for (const lang of LANGS) {
    if (!lang.dict) {
      console.warn(`⚠️  No dict for ${lang.code}, skipping.`);
      continue;
    }

    const { code, label, dict, namespaces } = lang;
    const supported = new Set(namespaces);

    const missing = [];
    const extra = [];

    for (const key of allKeys) {
      const ns = namespaceOfKey(key);
      if (!supported.has(ns)) {
        // This language is not expected to have that namespace yet
        continue;
      }

      if (typeof dict[key] === "undefined") {
        missing.push(key);
      }
    }

    // extras: keys in this language that don't exist in en at all
    for (const key of Object.keys(dict)) {
      if (!canonical.hasOwnProperty(key)) {
        extra.push(key);
      }
    }

    console.log(`=== ${label} [${code}] ===`);
    console.log(`  Namespaces checked: ${namespaces.join(", ")}`);

    if (missing.length === 0) {
      console.log("  ✅ No missing keys.");
    } else {
      console.log(`  ❌ Missing ${missing.length} keys:`);
      missing.forEach((k) => console.log("    - " + k));
    }

    if (extra.length > 0) {
      console.log(`\n  ℹ️  Keys only in ${code} (not in en):`);
      extra.forEach((k) => console.log("    + " + k));
    }

    console.log(""); // blank line between languages
  }
}

runCheck();