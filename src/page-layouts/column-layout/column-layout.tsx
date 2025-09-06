import { useSetCSSProperty } from "@/shared/hooks/useSetCSSProperty";
import type {
  AlignItems,
  CSSInheritance,
  JustifyItems,
} from "@/types/styleprops-types";
import { clsx } from "clsx";
import { useRef } from "react";
import styles from "./column-layout.module.css";

interface Props {
  arrangement: "left-sidebar" | "right-sidebar";
  children?: React.ReactNode;
  justifyItems?: JustifyItems | CSSInheritance;
  alignItems?: AlignItems | CSSInheritance;
}

export const ColumnLayout: React.FC<Props> = ({
  arrangement,
  children,
  justifyItems,
  alignItems,
}) => {
  const componentRef = useRef<HTMLDivElement>(null);

  useSetCSSProperty<HTMLHeadingElement>(componentRef, {
    property: "--justify-items",
    value: justifyItems,
  });

  useSetCSSProperty<HTMLHeadingElement>(componentRef, {
    property: "--align-items",
    value: alignItems,
  });

  return (
    <div
      ref={componentRef}
      className={clsx(
        "column-layout",
        `${styles[arrangement]}`,
        justifyItems && "justify-items",
        alignItems && "align-items"
      )}
    >
      {children}
    </div>
  );
};
