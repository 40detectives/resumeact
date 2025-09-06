import {
  useCSSCustomProperties,
  useSetCSSProperty,
} from "@/shared/hooks/styleprops";
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

  useCSSCustomProperties(componentRef, {
    "--justify-items": justifyItems,
    "--align-items": alignItems,
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
