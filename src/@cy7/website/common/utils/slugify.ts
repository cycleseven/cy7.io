// Stolen from https://stackoverflow.com/a/1054862/2758003
function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}

export { slugify };
