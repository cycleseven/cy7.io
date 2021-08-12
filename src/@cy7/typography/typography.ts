import Typography from "typography";

type Cy7TypographyType = Typography & {
  options: Typography["options"] & {
    bodyFontFamily: string[];
    headerFontFamily: string[];
  }
};

interface ICy7Typography extends Typography {
  getHeaderFontFamily: () => string | undefined;
}

class Cy7Typography extends Typography implements ICy7Typography {
  getHeaderFontFamily() {
    if (this.options.headerFontFamily === undefined) {
      return undefined;
    }

    return this.options.headerFontFamily.join(", ");
  }
}

const typography = new Cy7Typography({
  baseFontSize: "17px",
  baseLineHeight: 1.65,
  blockMarginBottom: 0.8,
  bodyColor: "hsl(213, 89%, 20%)", // TODO: get from theme instead
  bodyFontFamily: [
    "Inter",
    "Helvetica Neue",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyWeight: 400,
  headerColor: "hsl(213, 89%, 20%)", // TODO: get from theme instead
  headerFontFamily: ["Oswald", "Open Sans Condensed", "Impact", "sans-serif"],
  headerWeight: 700,
  scaleRatio: 2.5,
  overrideStyles: ({ rhythm }) => ({
    "h1,h2,h3": {
      textTransform: "uppercase",
    },
    h1: {
      letterSpacing: "-0.015em",
      marginBottom: rhythm(1.5),
    },
    h2: {
      marginBottom: rhythm(1),
      marginTop: rhythm(2),
    },
  }),
}) as Cy7TypographyType;

export { typography };
