const baseBorderRadiusPx = 2;

function borderRadius(multiplier = 1) {
  return `${multiplier * baseBorderRadiusPx}px`;
}

export { borderRadius };
