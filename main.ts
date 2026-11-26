import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const line =
  "Error 402: token budget exhausted. The rest of this sentence has been repossessed.";

const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
