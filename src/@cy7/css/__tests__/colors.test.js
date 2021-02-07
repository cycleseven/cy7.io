import assert from "assert";
import { hslAdjust } from "@cy7/css";

describe("@cy7/css/colors/hslAdjust", () => {
  it("should update hsl values", () => {
    const output = hslAdjust("hsl(213, 64%, 14%)", {
      saturation: 0.2,
      lightness: 0.5,
    });

    assert.equal(output, "hsl(213, 20%, 50%)");
  });
});
