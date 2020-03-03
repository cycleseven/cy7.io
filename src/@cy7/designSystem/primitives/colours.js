const coreColours = {
  angrypeach: {
    hue: 2,
    saturation: 100,
    lightness: 75,
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
    lightness: 98,
    alpha: 1
  },
  obsidian: {
    hue: 200,
    saturation: 40,
    lightness: 10,
    alpha: 1
  }
};

// TODO: test
function createColourFunction(colourName, parameters) {
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
    background: createColourFunction("paper"),
    header: createColourFunction("paper", { saturation: 15, lightness: 15 }),
    body: createColourFunction("paper", { saturation: 80, lightness: 10 })
  },
  candyfloss: {
    background: createColourFunction("candyfloss"),
    header: createColourFunction("candyfloss", { lightness: 14 })
  }
};

const colours = {
  angrypeach: createColourFunction("angrypeach"),
  candyfloss: createColourFunction("candyfloss"),
  paper: createColourFunction("paper"),
  obsidian: createColourFunction("obsidian")
};

export { colours, palettes };
