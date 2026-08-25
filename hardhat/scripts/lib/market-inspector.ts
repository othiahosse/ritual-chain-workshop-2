export type MarketSnapshot = {
  id: bigint;
  target: bigint;
  resolveBlock: bigint;
  yesPool: bigint;
  noPool: bigint;
};

export function totalPool(
  market: MarketSnapshot,
): bigint {
  return (
    market.yesPool +
    market.noPool
  );
}

export function largerSide(
  market: MarketSnapshot,
): "YES" | "NO" | "TIE" {
  if (
    market.yesPool ===
    market.noPool
  ) {
    return "TIE";
  }

  return market.yesPool >
    market.noPool
    ? "YES"
    : "NO";
}

export function blocksUntilResolution(
  market: MarketSnapshot,
  currentBlock: bigint,
): bigint {
  if (
    currentBlock >=
    market.resolveBlock
  ) {
    return 0n;
  }

  return (
    market.resolveBlock -
    currentBlock
  );
}

export function snapshotLines(
  market: MarketSnapshot,
): string[] {
  return [
    `Market ID: ${market.id}`,
    `Target: ${market.target}`,
    `Resolve block: ${market.resolveBlock}`,
    `YES pool: ${market.yesPool}`,
    `NO pool: ${market.noPool}`,
    `Total pool: ${totalPool(market)}`,
    `Larger side: ${largerSide(market)}`,
  ];
}

export function snapshotText(
  market: MarketSnapshot,
): string {
  return snapshotLines(
    market,
  ).join("\n");
}
