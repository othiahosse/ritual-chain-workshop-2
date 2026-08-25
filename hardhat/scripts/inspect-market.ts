import {
  snapshotText,
  blocksUntilResolution,
} from "./lib/market-inspector";

const market = {
  id: 7n,
  target: 4000n,
  resolveBlock: 1200n,
  yesPool: 30n,
  noPool: 20n,
};

const currentBlock = 1050n;

console.log(
  "Market inspection",
);

console.log(
  "=================",
);

console.log(
  snapshotText(market),
);

console.log("");

console.log(
  "Current block:",
  currentBlock.toString(),
);

console.log(
  "Blocks remaining:",
  blocksUntilResolution(
    market,
    currentBlock,
  ).toString(),
);

console.log("");

console.log(
  "This is only a small inspection",
);

console.log(
  "helper. It does not change state.",
);
