import { useSetCSSProperty } from "@/shared/hooks/useSetCSSProperty";
import type { AlignItems, JustifyItems } from "@/types/theme-types";
import { clsx } from "clsx";
import { useRef } from "react";
import styles from "./column.module.css";

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
    property: "--justify-self",
    value: justifyItems,
  });

  useSetCSSProperty<HTMLDivElement>(componentRef, {
    property: "--align-self",
    value: alignItems,
  });

  return (
    <section
      ref={componentRef}
      className={clsx(
        "column-ghost",
        styles[`col-${slot}`],
        justifyItems && "justify-items",
        alignItems && "align-items"
      )}
    >
      {children}
    </section>
  );
};
