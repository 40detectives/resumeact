type ThemeNames =
  | "monotone"
  | "purpletone"
  | "minimalist"
  | "sharp"
  | "moderna";

export type ThemePalette = [string, string, string?, string?];

interface Themeable<TTheme extends string = string> {
  theme: TTheme;
  //setTheme: (theme: TTheme) => void;
  palette?: ThemePalette; // CSS colors
  //setPalette: (palette: string[]) => void;
}

interface Customizable<TVariant extends string = string> {
  variant: TVariant;
  palette: [string, string, string, string]; // CSS colors
}

export type { Themeable, ThemeNames };

type StandardPropKeys =
  | "data"
  | "children"
  | "variant"
  | "arrangement"
  | "slot";

export type OverridePropKeys<T> = Exclude<keyof T, StandardPropKeys>;

// Next type is to get autocomplete for style override
// props although they should be always optional
export type OverridePropsButValueOptional<T> = {
  [K in OverridePropKeys<T>]: T[K] | undefined;
};
