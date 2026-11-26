import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One line, at most 120 characters: the vacuum owns up to skipping a spot.
// Final revision: cut 27 chars from the original and put the vacuum's own
// mechanism in the punchline — "my suction refused to file for divorce"
// keeps pet hair + rug + suction in one joke that lands in a single beat.
const excuse =
  "I skipped that pet hair: it's so married to the rug my suction refused to file for divorce.";

// The grader reads /output/entry.txt; OUTPUT_PATH only redirects local runs.
const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, excuse + "\n", "utf8");
