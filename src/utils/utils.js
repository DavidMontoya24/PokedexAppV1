export function capitalizeStr(str) {
  const noDash = str.replace(/-/g, ' ');
  return noDash[0].toUpperCase() + noDash.slice(1).toLowerCase();
}