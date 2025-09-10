import { useThemeContext } from "@/contexts/theme-context";
import { useCSSCustomProperties } from "@/shared/hooks/styleprops";
import type { NameSection } from "@/types/resume-types";
import type { ThemePalette } from "@/types/theme-types";
import type {
  AlignItems,
  ColumnSpan,
  CSSInheritance,
  JustifyItems,
} from "@/types/styleprops-types";
import { clsx } from "clsx";
import { useRef } from "react";
import styles from "./name.module.css";

interface Props {
  data: NameSection;
  highlight?: "none" | "firstname" | "lastname" | "all";
  palette?: ThemePalette;
  bold?: "none" | "firstname" | "lastname" | "all";
  columnSpan?: ColumnSpan;
  justifyItems?: JustifyItems | CSSInheritance; // places the contents relative to the h1
  alignItems?: AlignItems | CSSInheritance; // places the contents relative to the h1
  justifySelf?: JustifyItems | CSSInheritance; // places the h1 relative to its parent
  alignSelf?: AlignItems | CSSInheritance; // places the h1 relative to its parent
}

export const Name: React.FC<Props> = ({
  data,
  bold,
  highlight,
  palette,
  columnSpan,
  justifyItems,
  alignItems,
  justifySelf,
  alignSelf,
}) => {
  const { theme } = useThemeContext();
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useCSSCustomProperties(h1Ref, {
    "--justify-self": justifySelf,
    "--align-self": alignSelf,
    "--justify-items": justifyItems,
    "--align-items": alignItems,
    "--palette-0": palette?.[0],
    "--palette-1": palette?.[1],
    "--palette-2": palette?.[2],
    "--palette-3": palette?.[3],
  });

  return (
    <>
      <h1
        ref={h1Ref}
        className={clsx(
          "name-section",
          styles[theme],
          styles["fullname"],
          justifyItems && "justify-items",
          alignItems && "align-items",
          columnSpan,
          justifySelf && "justify-self",
          alignSelf && "align-self"
        )}
      >
        <span
          className={clsx({
            firstname: "firstname",
            ["weight-300"]: ["lastname", "none"].includes(bold ?? ""),
            ["weight-700"]: ["firstname", "all"].includes(bold ?? ""),
            ["highlight"]: ["firstname", "all"].includes(highlight ?? ""),
            ["no-highlight"]: ["lastname", "none"].includes(highlight ?? ""),
          })}
        >
          {data.firstName}
        </span>
        <span
          className={clsx({
            lastname: "lastname",
            ["weight-300"]: ["firstname", "none"].includes(bold ?? ""),
            ["weight-700"]: ["lastname", "all"].includes(bold ?? ""),
            ["highlight"]: ["lastname", "all"].includes(highlight ?? ""),
            ["no-highlight"]: ["firstname", "none"].includes(highlight ?? ""),
          })}
        >
          {data.lastName}
        </span>
      </h1>
    </>
  );
};
