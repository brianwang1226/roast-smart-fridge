import * as fs from "fs";
import * as path from "path";

// One-liner entry for the "Roast the Smart Fridge" bounty.
// Gate: entry must be 1 to 160 UTF-8 characters, not only whitespace.
// The guard below enforces the cap before anything is written.
const MAX_CHARS = 160;

const LINE =
  "My smart fridge judges me. It counted my midnight snacks, locked the ice cream drawer, and texted my wife 'he is at it again'. I bought a lock. It has one now.";

if (LINE.length > MAX_CHARS) {
  throw new Error(
    `entry is ${LINE.length} chars, over the ${MAX_CHARS} char gate`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");
