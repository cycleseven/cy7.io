/**
 * Return true if array a and b have at least one matching element.
 */
function arraysHaveIntersect(a: any[], b: any[]): boolean {
  return a.some((elem) => b.includes(elem));
}

export { arraysHaveIntersect };
