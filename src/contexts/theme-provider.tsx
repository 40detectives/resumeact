import { useState } from "react";
import { ThemeContext } from "./theme-context";
import type { Themeable, ThemeNames } from "@/types/theme-types";

interface Props {
  children?: React.ReactNode;
  theme: ThemeNames;
  palette: Themeable["palette"];
}

export const ThemeProvider: React.FC<Props> = ({
  children,
  theme: themeName,
  palette: colors,
}) => {
  const [theme, setTheme] = useState<ThemeNames>(themeName);
  const [palette, setPalette] = useState(colors);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        palette,
        setPalette,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
