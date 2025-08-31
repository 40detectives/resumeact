import { useThemeContext } from "@/contexts/theme-context";
import { useSetCSSProperty } from "@/shared/hooks/useSetCSSProperty";
import type { NameSection } from "@/types/resume-types";
import type { AlignItems, ColumnSpan, JustifyItems } from "@/types/theme-types";
import { clsx } from "clsx";
import { useRef } from "react";
import styles from "./name.module.css";

interface Props {
  data: NameSection;
  highlight?: "none" | "firstname" | "lastname" | "all";
  accentColor?: "string";
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
  accentColor,
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
            [styles["firstname"]]: styles["firstname"],
            [styles["weight-300"]]: ["lastname", "none"].includes(bold ?? ""),
            [styles["weight-500"]]: ["firstname", "all"].includes(bold ?? ""),
            [styles["highlight"]]: ["firstname", "all"].includes(
              highlight ?? ""
            ),
            [styles["no-highlight"]]: ["lastname", "none"].includes(
              highlight ?? ""
            ),
          })}
        >
          {data.firstName}
        </span>
        <span
          className={clsx({
            [styles["lastname"]]: styles["lastname"],
            [styles["weight-300"]]: ["firstname", "none"].includes(bold ?? ""),
            [styles["weight-500"]]: ["lastname", "all"].includes(bold ?? ""),
            [styles["highlight"]]: ["lastname", "all"].includes(
              highlight ?? ""
            ),
            [styles["no-highlight"]]: ["firstname", "none"].includes(
              highlight ?? ""
            ),
          })}
        >
          {data.lastName}
        </span>
      </h1>
    </>
  );
};
