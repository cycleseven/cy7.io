/**
 * Create a function that prefixes ID attributes.
 *
 * Use this in components that use the HTML "id" attribute internally, so that
 * IDs don't clash when there are multiple instances of the component on
 * the page.
 */
function createIdPrefixer(prefix: string) {
  return function prefixId(id: string): string {
    return `${prefix}--${id}`;
  };
}

export { createIdPrefixer };
