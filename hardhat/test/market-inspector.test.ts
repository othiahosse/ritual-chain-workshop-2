import { expect } from "chai";

import {
  totalPool,
  largerSide,
  blocksUntilResolution,
  snapshotLines,
  snapshotText,
} from "../scripts/lib/market-inspector";

describe("market inspector", function () {
  const market = {
    id: 7n,
    target: 4000n,
    resolveBlock: 1200n,
    yesPool: 30n,
    noPool: 20n,
  };

  it("calculates the total pool", function () {
    expect(
      totalPool(market),
    ).to.equal(50n);
  });

  it("finds the larger side", function () {
    expect(
      largerSide(market),
    ).to.equal("YES");
  });

  it("calculates remaining blocks", function () {
    expect(
      blocksUntilResolution(
        market,
        1000n,
      ),
    ).to.equal(200n);
  });

  it("returns zero after resolution block", function () {
    expect(
      blocksUntilResolution(
        market,
        1300n,
      ),
    ).to.equal(0n);
  });

  it("handles equal pools", function () {
    expect(
      largerSide({
        ...market,
        yesPool: 20n,
        noPool: 20n,
      }),
    ).to.equal("TIE");
  });

  it("creates snapshot lines", function () {
    const lines =
      snapshotLines(market);

    expect(lines)
      .to.have.length(7);

    expect(lines[0])
      .to.contain("7");
  });

  it("creates readable snapshot text", function () {
    const text =
      snapshotText(market);

    expect(text)
      .to.contain(
        "Total pool: 50",
      );
  });
});
