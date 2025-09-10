import { clsx } from "clsx";
import styles from "./profile-pic.module.css";
import { useCSSCustomProperties } from "@/shared/hooks/styleprops";
import { useRef } from "react";
import type { ThemePalette } from "@/types/theme-types";
import { useThemeContext } from "@/contexts/theme-context";
import type {
  JustifyItems,
  CSSInheritance,
  AlignItems,
} from "@/types/styleprops-types";

interface Props {
  firstName: string;
  picture: string;
  variant?: string;
  picSize?: number;
  palette?: ThemePalette;
  justifySelf?: JustifyItems | CSSInheritance;
  alignSelf?: AlignItems | CSSInheritance;
  rounded?: string; // e.g. "20%" or "50%"
  filter?: string; // e.g. "gray-scale"
}

export const ProfilePicture: React.FC<Props> = ({
  firstName,
  picture,
  palette,
  variant = "",
  picSize = 135,
  justifySelf,
  alignSelf,
  rounded,
  filter = "",
}) => {
  const { theme } = useThemeContext();
  const figureRef = useRef<HTMLElement>(null);

  useCSSCustomProperties(figureRef, {
    "--pic-size": picSize,
    "--palette-0": palette?.[0],
    "--palette-1": palette?.[1],
    "--palette-2": palette?.[2],
    "--palette-3": palette?.[3],
    "--justify-self": justifySelf,
    "--align-self": alignSelf,
    "--border-radius": rounded,
  });

  return (
    <figure
      ref={figureRef}
      className={clsx(
        "profile-picture-section",
        justifySelf && "justify-self",
        alignSelf && "align-self"
      )}
    >
      <img
        className={clsx(
          styles["profile-pic"],
          styles[theme],
          styles[variant],
          styles[filter],
          rounded && "rounded"
        )}
        src={picture}
        alt={`${firstName}'s profile pic`}
        width={picSize}
        height={picSize}
      />
    </figure>
  );
};
