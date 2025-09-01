type ThemeNames = "monotone" | "minimalist" | "sharp";

interface Themeable<TTheme extends string = string> {
  theme: TTheme;
  //setTheme: (theme: TTheme) => void;
  palette?: [string, string, string?, string?]; // CSS colors
  //setPalette: (palette: string[]) => void;
}

interface Customizable<TVariant extends string = string> {
  variant: TVariant;
  palette: [string, string, string, string]; // CSS colors
}

export type { Themeable, ThemeNames };

export type ColumnSpan = "col-span-full" | "col-span-1";

export type CSSInheritanceValue =
  | "inherit"
  | "initial"
  | "revert"
  | "revert-layer"
  | "unset";

export type JustifyItems =
  | "anchor-center"
  | "baseline"
  | "center"
  | "end"
  | "flex-end"
  | "flex-start"
  | "left"
  | "normal"
  | "right"
  | "self-end"
  | "self-start"
  | "start"
  | "stretch"
  | CSSInheritanceValue;

export type AlignItems =
  | "anchor-center"
  | "baseline"
  | "center"
  | "end"
  | "flex-end"
  | "flex-start"
  | "normal"
  | "self-end"
  | "self-start"
  | "start"
  | "stretch"
  | CSSInheritanceValue;

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
