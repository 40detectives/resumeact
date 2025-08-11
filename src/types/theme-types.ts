type ThemeNames = "monotone" | "minimalist" | "sharp";

interface Themeable<TTheme extends string = string> {
  theme: TTheme;
  //setTheme: (theme: TTheme) => void;
  palette: [string, string, string, string]; // CSS colors
  //setPalette: (palette: string[]) => void;
}

interface Customizable<TVariant extends string = string> {
  variant: TVariant;
  palette: [string, string, string, string]; // CSS colors
}

export type { ThemeNames, Themeable, Customizable };
