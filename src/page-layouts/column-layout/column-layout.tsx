import type { AlignItems, JustifyItems } from "@/types/theme-types";
import styles from "./column-layout.module.css";
import { clsx } from "clsx";
import { useRef } from "react";
import { useSetCSSProperty } from "@/shared/hooks/useSetCSSProperty";
import { hasOverrideProp } from "@/utils/style-overriding";

interface Props {
  arrangement: "left-sidebar" | "right-sidebar";
  children?: React.ReactNode;
  justifyItems?: JustifyItems;
  alignItems?: AlignItems;
}

export const ColumnLayout: React.FC<Props> = ({
  arrangement,
  children,
  justifyItems,
  alignItems,
}) => {
  const componentRef = useRef<HTMLDivElement>(null);

  useSetCSSProperty<HTMLHeadingElement>(componentRef, {
    property: "--justify-value",
    value: justifyItems,
  });

  useSetCSSProperty<HTMLHeadingElement>(componentRef, {
    property: "--align-value",
    value: alignItems,
  });

  return (
    <div
      ref={componentRef}
      className={clsx(
        styles["column-layout"],
        `${styles[arrangement]}`,
        justifyItems && "justify-items",
        alignItems && "align-items"
      )}
    >
      {children}
    </div>
  );
};
