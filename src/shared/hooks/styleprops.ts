import type { ThemePalette } from "@/types/theme-types";
import type {
  AlignItems,
  CSSInheritance,
  JustifyItems,
} from "@/types/styleprops-types";
import { deepEqual } from "fast-equals";
import { useEffect, useRef } from "react";
import {
  useCustomCompareEffect,
  useCustomCompareMemo,
} from "use-custom-compare";

interface CSSRuleTypes {
  "--align-items": AlignItems | CSSInheritance | undefined | null;
  "--justify-items": JustifyItems | CSSInheritance | undefined | null;
  "--align-self": AlignItems | CSSInheritance | undefined | null;
  "--justify-self": JustifyItems | CSSInheritance | undefined | null;
  "--palette-0": string | undefined | null;
  "--palette-1": string | undefined | null;
  "--palette-2": string | undefined | null;
  "--palette-3": string | undefined | null;
}

type CSSRuleProperty = keyof CSSRuleTypes;

// type StyleProps = Partial<CSSRuleTypes>;
type StyleProps = {
  [K in keyof CSSRuleTypes]?: CSSRuleTypes[K] | null;
};

type CSSRuleValue = string | null | undefined;
type CSSRulePriority = "important" | "" | null;

interface CSSRuleObject {
  property: CSSRuleProperty;
  value?: CSSRuleValue;
  priority?: CSSRulePriority;
}

export const useSetCSSProperty = <T extends HTMLElement>(
  elemRef: React.RefObject<T | null>,
  { property, value, priority }: CSSRuleObject
): void => {
  useEffect(() => {
    elemRef.current?.style.setProperty(property, value ?? "", priority ?? "");
  }, [elemRef, property, value, priority]);
};

export const useSetCPGridPlaceItems = <T extends HTMLElement>(
  elemRef: React.RefObject<T | null>,
  {
    justifyItems,
    alignItems,
  }: { justifyItems: CSSRuleValue; alignItems: CSSRuleValue }
): void => {
  useSetCSSProperty(elemRef, {
    property: "--justify-items",
    value: justifyItems,
    priority: "",
  });
  useSetCSSProperty(elemRef, {
    property: "--align-items",
    value: alignItems,
    priority: "",
  });
};

export const useSetCPGridPlaceSelf = <T extends HTMLElement>(
  elemRef: React.RefObject<T | null>,
  {
    justifySelf,
    alignSelf,
  }: { justifySelf: CSSRuleValue; alignSelf: CSSRuleValue }
): void => {
  useSetCSSProperty(elemRef, {
    property: "--justify-self",
    value: justifySelf,
    priority: "",
  });
  useSetCSSProperty(elemRef, {
    property: "--align-self",
    value: alignSelf,
    priority: "",
  });
};

export const useSetCPPalette = <T extends HTMLElement>(
  elemRef: React.RefObject<T | null>,
  palette?: ThemePalette
): void => {
  useSetCSSProperty(elemRef, {
    property: "--palette-0",
    value: palette?.[0],
    priority: "",
  });
  useSetCSSProperty(elemRef, {
    property: "--palette-1",
    value: palette?.[1],
    priority: "",
  });
  useSetCSSProperty(elemRef, {
    property: "--palette-2",
    value: palette?.[2],
    priority: "",
  });
  useSetCSSProperty(elemRef, {
    property: "--palette-3",
    value: palette?.[3],
    priority: "",
  });
};

export function usePropDiff<T extends object>(currentProps: T): Partial<T> {
  const prevPropsRef = useRef<T>({} as T);

  const diff = useCustomCompareMemo(
    () => {
      const { current: prevProps } = prevPropsRef;

      const allKeys = new Set<keyof T>([
        ...(Object.keys(prevProps) as (keyof T)[]),
        ...(Object.keys(currentProps) as (keyof T)[]),
      ]);

      const currentDiff: T = {} as T;

      for (const key of allKeys) {
        const prevHas = key in prevProps;
        const currHas = key in currentProps;
        const valueChanged = prevProps[key] !== currentProps[key];

        if (!prevHas && currHas) {
          currentDiff[key] = currentProps[key]; // prop added
        } else if (prevHas && !currHas) {
          currentDiff[key] = currentProps[key]; // prop deleted, we maintain it with undefined
        } else if (valueChanged) {
          currentDiff[key] = currentProps[key]; // value updated
        }
      }

      prevPropsRef.current = currentProps;
      return currentDiff;
    },
    [currentProps],
    (prevDeps, nextDeps) => deepEqual(prevDeps, nextDeps)
  );
  return diff;
}

export function useStylePropDiff(currentProps: StyleProps) {
  return usePropDiff(currentProps);
}

export const useSetCSSCustomProperties = <T extends HTMLElement>(
  elemRef: React.RefObject<T | null>,
  props: StyleProps
): void => {
  const changes = useStylePropDiff(props);

  useCustomCompareEffect(
    () => {
      for (const key of Object.keys(changes) as (keyof StyleProps)[]) {
        const [value, priority] = String(changes[key] ?? "").split("!");
        elemRef.current?.style.setProperty(key, value, priority);
        console.log(`I'm updating ${key} with value ${value}`);
      }
    },
    [elemRef, changes],
    (prevDeps, nextDeps) => deepEqual(prevDeps, nextDeps)
  );
};

export const useSetCSSPropertyInStylesheet = (
  selector: string,
  { property, value, priority }: CSSRuleObject,
  layerName?: string
): void => {
  useEffect(() => {
    const indexCss = Array.from(document.styleSheets).find(
      (sheet) => sheet.title === "index"
    );

    if (!indexCss) return;

    const layer0 = Array.from(
      indexCss.cssRules as unknown as CSSLayerBlockRule[]
    ).find((layer) => layer.name === layerName);
    if (!layer0) return;

    const final = layer0 ?? indexCss;

    const rule = Array.from(final.cssRules as unknown as CSSStyleRule[]).find(
      (rule) => rule.selectorText === selector
    );

    rule?.style.setProperty(property, value ?? "", priority ?? "");
    console.log(rule);
  }, [layerName, selector, property, value, priority]);
};