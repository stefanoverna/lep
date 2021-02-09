export default function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/ /g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, ""); // Remove all non-word chars
}
