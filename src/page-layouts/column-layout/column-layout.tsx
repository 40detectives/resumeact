import type { AlignItems, JustifyItems } from "@/types/theme-types";
import styles from "./column-layout.module.css";
import { clsx } from "clsx";
import { useRef } from "react";
import { useSetCSSProperty } from "@/shared/hooks/useSetCSSProperty";
import { hasOverrideProp } from "@/utils/style-overriding";

interface Props {
  variant?: "left-sidebar" | "right-sidebar";
  children?: React.ReactNode;
  justifyItems?: JustifyItems;
  alignItems?: AlignItems;
}

export const ColumnLayout: React.FC<Props> = ({
  variant = "left-sidebar",
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
        variant && `variant ${styles[variant]}`,
        hasOverrideProp<Props>({
          justifyItems,
          alignItems,
        }) && "override",
        justifyItems && "justify-items",
        alignItems && "align-items"
      )}
    >
      {children}
    </div>
  );
};
