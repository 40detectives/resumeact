export function calcScaleFromWidth(
  baseWidth: number,
  maxWidth: number,
  minScale: number,
  maxScale: number
) {
  const newScale = Math.max(Math.min(baseWidth / maxWidth, maxScale), minScale);

  return newScale;
}
