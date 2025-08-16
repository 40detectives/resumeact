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

export type ColumnLayoutItem = "full-row" | "one-column";

export type JustifyContent =
  | "normal"
  | "start"
  | "left"
  | "center"
  | "right"
  | "end"
  | "stretch"
  | "space-between"
  | "space-around"
  | "space-evenly";

export type AlignItems =
  | "normal"
  | "stretch"
  | "anchor-center"
  | "baseline"
  | "start"
  | "flex-start"
  | "center"
  | "end"
  | "flex-end"
  | "self-start"
  | "self-end";

type StandardPropKeys = "data" | "children" | "variant";

export type OverridePropKeys<T> = Exclude<keyof T, StandardPropKeys>;

// Next type is to get autocomplete for style override
// props although they should be always optional
export type OverridePropsButValueOptional<T> = {
  [K in OverridePropKeys<T>]: T[K] | undefined;
};
