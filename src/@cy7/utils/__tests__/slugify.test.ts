import assert from "assert";
import { slugify } from "@cy7/utils/slugify";

describe("@cy7/utils/slugify/slugify", () => {
  it("should convert a typical h2 in a blog post to a URL-friendly format", () => {
    assert.equal(
      slugify("The truth about stack traces"),
      "the-truth-about-stack-traces"
    );
  });

  it("should dedupe hyphens", () => {
    assert.equal(slugify("Stack traces - the truth"), "stack-traces-the-truth");
  });

  it("should strip punctuation", () => {
    assert.equal(slugify("Wow!!!"), "wow");
  });
});
