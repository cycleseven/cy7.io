import assert from "assert";
import { arraysHaveIntersect } from "@cy7/website/common/utils/arrays";

describe("@cy7/utils/array/arraysHaveIntersect", () => {
  it("should return true if at least one element matches", () => {
    assert.equal(arraysHaveIntersect([2], [1, 2]), true);
  });

  it("should work with strings too", () => {
    assert.equal(
      arraysHaveIntersect(["apple", "pear"], ["banana", "apple"]),
      true
    );
  });

  it("should return false if no elements match", () => {
    assert.equal(arraysHaveIntersect([3], [1, 2]), false);
  });

  it("should return false if one array is empty", () => {
    assert.equal(arraysHaveIntersect([1], []), false);
  });

  it("should return false if both arrays are empty", () => {
    assert.equal(arraysHaveIntersect([], []), false);
  });
});
