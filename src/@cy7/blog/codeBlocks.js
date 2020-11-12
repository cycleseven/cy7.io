/**
 * Return true if the string is whitespace-only.
 */
function isWhitespaceOnly(string) {
  return string.match(/^\s*$/);
}

/**
 * Given an array of strings, trim the whitespace-only ones from the start and
 * end.
 */
function trimEmptyLines(lines) {
  if (lines.length === 0) {
    return [];
  }

  const range = { start: 0, end: lines.length - 1 };

  // Loop through from the start to find the first non-empty line
  for (let i = 0; i < lines.length; i++) {
    range.start = i;

    // Exit the loop when the first non-empty line is found
    if (!isWhitespaceOnly(lines[i])) {
      break;
    }
  }

  // Now do the same to find the end index
  for (let i = lines.length; i > 0; i--) {
    range.end = i;

    if (!isWhitespaceOnly(lines[i - 1])) {
      break;
    }
  }

  return lines.slice(range.start, range.end);
}

/**
 * Trim trailing whitespace from a code block string without knocking out the
 * indentation.
 *
 * Loads of edge cases this won't handle, eg. if the snippet uses the tab
 * character for indentation. But it's good enough for my use case (so far!).
 */
function trimCodeSnippet(snippet) {
  const lines = snippet.split(/\r?\n/);
  const significantLines = trimEmptyLines(lines);
  const nonEmptyLines = significantLines.filter(
    line => !isWhitespaceOnly(line)
  );
  const minimumIndentSize = nonEmptyLines.reduce((minSoFar, line) => {
    const indentSize = Array.from(line).findIndex(char => char !== " ");

    if (indentSize < minSoFar) {
      return indentSize;
    } else {
      return minSoFar;
    }
  }, Number.MAX_SAFE_INTEGER);

  return significantLines
    .map(line => line.slice(minimumIndentSize).replace(/\s+$/, ""))
    .join("\n");
}

export { trimCodeSnippet };
