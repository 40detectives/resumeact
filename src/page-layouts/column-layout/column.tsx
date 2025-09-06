import {
  useSetCSSCustomProperties,
  useSetCSSProperty,
} from "@/shared/hooks/styleprops";
import type {
  AlignItems,
  CSSInheritance,
  JustifyItems,
} from "@/types/styleprops-types";
import { clsx } from "clsx";
import { useRef } from "react";
import styles from "./column.module.css";

interface Props {
  children?: React.ReactNode;
  slot: "sidebar" | "main";
  justifyItems?: JustifyItems | CSSInheritance;
  alignItems?: AlignItems | CSSInheritance;
}

export const Column: React.FC<Props> = ({
  children,
  slot,
  justifyItems,
  alignItems,
}) => {
  const componentRef = useRef<HTMLDivElement>(null);

  useSetCSSCustomProperties(componentRef, {
    "--justify-self": justifyItems,
    "--align-self": alignItems,
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
