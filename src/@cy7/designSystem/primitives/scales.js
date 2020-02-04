const baseBorderRadiusPx = 5;

function borderRadius(multiplier = 1) {
  return `${multiplier * baseBorderRadiusPx}px`;
}

export { borderRadius };
