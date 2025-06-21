export function calcScaleAndClamp({
  actualLength,
  maxLength,
  minScale,
  maxScale,
}: {
  actualLength: number;
  maxLength: number;
  minScale: number;
  maxScale: number;
}) {
  const newScale = Math.max(
    Math.min(actualLength / maxLength, maxScale),
    minScale
  );

  return newScale;
}
