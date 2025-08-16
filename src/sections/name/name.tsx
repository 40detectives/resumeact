import { useSetCSSProperty } from "@/shared/hooks/useSetCSSProperty";
import type { NameSection } from "@/types/resume-types";
import type { ColumnLayoutItem, JustifyContent } from "@/types/theme-types";
import { hasOverrideProp } from "@/utils/style-overriding";
import { clsx } from "clsx";
import styles from "./name.module.css";
import { useRef } from "react";

interface Props {
  data: NameSection;
  highlight?: "none" | "firstname" | "lastname" | "all";
  accentColor?: "string";
  bold?: "none" | "firstname" | "lastname" | "all";
  layout?: ColumnLayoutItem;
  justifyContent?: JustifyContent;
}

export const Name: React.FC<Props> = ({
  data,
  bold,
  highlight,
  accentColor,
  layout,
  justifyContent,
}) => {
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useSetCSSProperty<HTMLHeadingElement>(h1Ref, {
    property: "--justify-value",
    value: justifyContent,
  });

  return (
    <>
      <h1
        ref={h1Ref}
        className={clsx(
          [styles.fullname],
          hasOverrideProp<Props>({
            highlight,
            accentColor,
            bold,
            layout,
            justifyContent,
          }) && "override",
          layout,
          justifyContent && "justify-content"
        )}
      >
        <span
          className={clsx({
            [styles.firstname]: styles.firstname,
            [styles["weight-200"]]: ["lastname", "none"].includes(bold ?? ""),
            [styles["weight-500"]]: ["firstname", "all"].includes(bold ?? ""),
            [styles.highlight]: ["firstname", "all"].includes(highlight ?? ""),
            [styles["no-highlight"]]: ["lastname", "none"].includes(
              highlight ?? ""
            ),
          })}
        >
          {data.firstName}
        </span>
        <span
          className={clsx({
            [styles.lastname]: styles.lastname,
            [styles["weight-200"]]: ["firstname", "none"].includes(bold ?? ""),
            [styles["weight-500"]]: ["lastname", "all"].includes(bold ?? ""),
            [styles.highlight]: ["lastname", "all"].includes(highlight ?? ""),
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
