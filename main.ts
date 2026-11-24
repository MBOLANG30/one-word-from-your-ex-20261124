import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One word my ex would use to describe me: "sleeptexter" —
// the person who texts "we need to talk" and then falls asleep
// mid-conversation. Painfully honest, and it stings because it is true.
const WORD = "sleeptexter";

// The gate is strict: 1-24 chars, a single word, nothing but the word.
// Fail loudly here instead of shipping a bad entry.txt.
if (!/^[^\s]{1,24}$/.test(WORD)) {
  throw new Error(`invalid entry word: ${JSON.stringify(WORD)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
