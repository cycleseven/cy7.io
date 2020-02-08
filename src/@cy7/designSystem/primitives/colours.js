const coreColours = {
  angrypeach: {
    hue: 2,
    saturation: 85,
    lightness: 70,
    alpha: 1
  },
  candyfloss: {
    hue: 319,
    saturation: 98,
    lightness: 84,
    alpha: 1
  },
  paper: {
    hue: 35,
    saturation: 100,
    lightness: 97,
    alpha: 1
  },
  obsidian: {
    hue: 200,
    saturation: 40,
    lightness: 12,
    alpha: 1
  }
};

// TODO: test
function getColourFunction(colourName, parameters) {
  const baseColour = coreColours[colourName];
  const colour = {
    ...baseColour,
    ...parameters
  };

  return overrides => {
    const { hue, saturation, lightness, alpha } = { ...colour, ...overrides };
    return `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
  };
}

const palettes = {
  paper: {
    background: getColourFunction("paper"),
    header: getColourFunction("paper", { saturation: 15, lightness: 15 }),
    body: getColourFunction("paper", { saturation: 80, lightness: 10 })
  },
  candyfloss: {
    background: getColourFunction("candyfloss"),
    header: getColourFunction("candyfloss", { lightness: 14 })
  }
};

const colours = {
  angrypeach: getColourFunction("angrypeach"),
  candyfloss: getColourFunction("candyfloss"),
  paper: getColourFunction("paper"),
  obsidian: getColourFunction("obsidian")
};

export { colours, palettes };
