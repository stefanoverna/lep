/**
 * Replaces " " with "-" and converted to title case
 */
function titleCase(string) {
  return string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(" ");
}

export default function deslugify(text) {
  return titleCase(text.replace(/-/g, " "));
}
