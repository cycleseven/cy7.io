/**
 * Return true if array a and b have at least one matching element.
 */
function arraysHaveIntersect(a, b) {
  return a.some((elem) => b.includes(elem));
}

export { arraysHaveIntersect };
