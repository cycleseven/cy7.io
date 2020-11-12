import assert from "assert";
import { createIdPrefixer } from "@cy7/utils/ids";

describe("@cy7/utils/ids/createIdPrefixer", () => {
  it("should return a function that prefixes ids with a hyphen", () => {
    const makePrefixedId = createIdPrefixer("my-component");
    const prefixedId = makePrefixedId("some-id");
    assert.equal(prefixedId, "my-component--some-id");
  });
});
