/**
 * Return true if array a and b have at least one matching element.
 */
function arraysHaveIntersect<T>(a: T[], b: T[]): boolean {
  return a.some((elem) => b.includes(elem));
}

export { arraysHaveIntersect };
