import { useThemeContext } from "@/contexts/theme-context";
import { useSetCSSProperty } from "@/shared/hooks/useSetCSSProperty";
import type { NameSection } from "@/types/resume-types";
import type {
  AlignItems,
  ColumnSpan,
  JustifyItems,
  Themeable,
} from "@/types/theme-types";
import { clsx } from "clsx";
import { useRef } from "react";
import styles from "./name.module.css";

interface Props {
  data: NameSection;
  highlight?: "none" | "firstname" | "lastname" | "all";
  palette?: Themeable["palette"];
  bold?: "none" | "firstname" | "lastname" | "all";
  columnSpan?: ColumnSpan;
  justifyItems?: JustifyItems; // places the contents relative to the h1
  alignItems?: AlignItems; // places the contents relative to the h1
  justifySelf?: JustifyItems; // places the h1 relative to its parent
  alignSelf?: AlignItems; // places the h1 relative to its parent
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

  useSetCSSProperty<HTMLHeadingElement>(h1Ref, {
    property: "--justify-items",
    value: justifyItems,
  });

  useSetCSSProperty<HTMLHeadingElement>(h1Ref, {
    property: "--align-items",
    value: alignItems,
  });

  useSetCSSProperty<HTMLHeadingElement>(h1Ref, {
    property: "--justify-self",
    value: justifySelf,
  });

  useSetCSSProperty<HTMLHeadingElement>(h1Ref, {
    property: "--align-self",
    value: alignSelf,
  });

  useSetCSSProperty<HTMLHeadingElement>(h1Ref, {
    property: "--palette-0",
    value: palette?.[0],
  });

  useSetCSSProperty<HTMLHeadingElement>(h1Ref, {
    property: "--palette-1",
    value: palette?.[1],
  });

  useSetCSSProperty<HTMLHeadingElement>(h1Ref, {
    property: "--palette-2",
    value: palette?.[2],
  });

  useSetCSSProperty<HTMLHeadingElement>(h1Ref, {
    property: "--palette-3",
    value: palette?.[3],
  });

  return (
    <>
      <h1
        ref={h1Ref}
        className={clsx(
          "name-section",
          styles["fullname"],
          styles[theme],
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
