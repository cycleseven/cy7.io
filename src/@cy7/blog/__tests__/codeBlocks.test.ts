import assert from "assert";
import { trimCodeSnippet } from "@cy7/blog/codeBlocks";

describe("trimCodeSnippet", () => {
  test("should remove trailing whitespace on a one-liner", () => {
    const snippet = "  function foo() { return null; }     ";
    const trimmed = trimCodeSnippet(snippet);
    assert.equal(trimmed, "function foo() { return null; }");
  });

  test("should preserve indendation on multiline function", () => {
    // A more typical example
    const snippet = `
      function foo() {
        return null;
      }
    `;
    const trimmed = trimCodeSnippet(snippet);

    // Using explicit \n character to avoid ugly breaking.
    // The "return null" line should be indented by two spaces, like
    // in the original.
    assert.equal(trimmed, "function foo() {\n  return null;\n}");
  });

  test("should handle empty string", () => {
    const snippet = "";
    const trimmed = trimCodeSnippet(snippet);
    assert.equal(trimmed, "");
  });

  test("should handle whitespace-only string", () => {
    const snippet = "\n    \n ";
    const trimmed = trimCodeSnippet(snippet);
    assert.equal(trimmed, "");
  });
});
