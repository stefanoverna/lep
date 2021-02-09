export function toDateString(date) {
  return new Date(date).toLocaleDateString("en-US");
}

export function toDateInputString(date) {
  const d = new Date(date);
  return `${d.getFullYear().toString()}-${(d.getMonth() + 1)
    .toString()
    .padStart(2, 0)}-${d.getDate().toString().padStart(2, 0)}`;
}
