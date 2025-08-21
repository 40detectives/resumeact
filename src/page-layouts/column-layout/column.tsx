import { clsx } from "clsx";
import styles from "./column.module.css";
import type { AlignItems, JustifyItems } from "@/types/theme-types";
import { useRef } from "react";
import { useSetCSSProperty } from "@/shared/hooks/useSetCSSProperty";
import { hasOverrideProp } from "@/utils/style-overriding";

interface Props {
  children?: React.ReactNode;
  slot: "sidebar" | "main";
  justifyItems?: JustifyItems;
  alignItems?: AlignItems;
}

export const Column: React.FC<Props> = ({
  children,
  slot,
  justifyItems,
  alignItems,
}) => {
  const componentRef = useRef<HTMLDivElement>(null);

  useSetCSSProperty<HTMLDivElement>(componentRef, {
    property: "--justify-value",
    value: justifyItems,
  });

  useSetCSSProperty<HTMLDivElement>(componentRef, {
    property: "--align-value",
    value: alignItems,
  });

  return (
    <section
      ref={componentRef}
      className={clsx(
        styles["column"],
        `col-${slot}`,
        hasOverrideProp<Props>({ justifyItems, alignItems }) && "override",
        justifyItems && "justify-items",
        alignItems && "align-items"
      )}
    >
      {children}
    </section>
  );
};
