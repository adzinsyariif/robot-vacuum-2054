import { mkdirSync, writeFileSync } from "node:fs";

const excuse =
  "I left that pet hair alone: it was so committed to the rug I assumed they were married, and I don't break up families.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse + "\n", "utf8");
