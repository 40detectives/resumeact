import { clsx } from "clsx";
import styles from "./profile-pic.module.css";
import { useSetCSSCustomProperties } from "@/shared/hooks/styleprops";
import { useRef } from "react";
import type { ThemePalette } from "@/types/theme-types";

interface Props {
  firstName: string;
  picture: string;
  variant: string;
  picSize?: number;
  palette?: ThemePalette;
}

export const ProfilePicture: React.FC<Props> = ({
  firstName,
  picture,
  palette,
  variant,
  picSize = 135,
}) => {
  const figureRef = useRef(null);

  useSetCSSCustomProperties(figureRef, {
    "--pic-size": picSize,
    "--palette-0": palette?.[0],
    "--palette-1": palette?.[1],
  });

  return (
    <figure ref={figureRef} className="profile-picture-section">
      <img
        className={clsx(styles[`variant-${variant}`], styles["profile-pic"])}
        src={picture}
        alt={`${firstName}'s profile pic`}
        width={picSize}
        height={picSize}
      />
    </figure>
  );
};
