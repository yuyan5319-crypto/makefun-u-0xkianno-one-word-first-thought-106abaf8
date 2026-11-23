// One Word, First Thought
//
// The first word that comes to mind, written exactly once, with no
// explanation and no second draft. The word is "apricity": the warmth
// of the sun on a cold winter's day — a small, vivid feeling caught
// in a single rare word.
//
// Writes it to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const word = "apricity";

// A first thought is exactly one word: guard the gate the scorer
// enforces (UTF-8 text, 1 to 24 characters, not only whitespace,
// a single word with no spaces) so a bad word fails loudly here
// instead of silently scoring zero on the server.
if (!/^[^\s]{1,24}$/.test(word)) {
  throw new Error(`entry must be exactly one word of 1-24 characters, got: ${JSON.stringify(word)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
const outPath = outDir ? join(outDir, "entry.txt") : "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, word, "utf8");
