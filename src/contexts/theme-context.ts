import type { Themeable, ThemeNames } from "@/types/theme-types";
import { createContext, useContext } from "react";

interface ThemeContextType<T> extends Themeable<ThemeNames> {
  setTheme: (theme: T) => void;
  setPalette: (color: Themeable["palette"]) => void;
}
export const ThemeContext = createContext<ThemeContextType<ThemeNames> | null>(
  null
);

export const useThemeContext = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeContext has to be used within a <ThemeProvider>");
  }

  return themeContext;
};
