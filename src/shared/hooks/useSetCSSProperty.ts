import { useEffect, useLayoutEffect } from "react";

interface CSSRuleObject {
  property: string;
  value?: string | null;
  priority?: "important" | "" | null;
}

export const useSetCSSProperty = <T extends HTMLElement>(
  elemRef: React.RefObject<T | null>,
  { property, value, priority }: CSSRuleObject
): React.RefObject<T | null> => {
  useEffect(() => {
    elemRef.current?.style.setProperty(property, value ?? "", priority ?? "");
  }, [elemRef, property, value, priority]);

  return elemRef;
};

export const useSetCSSPropertySync = <T extends HTMLElement>(
  elemRef: React.RefObject<T | null>,
  { property, value, priority }: CSSRuleObject
): React.RefObject<T | null> => {
  useLayoutEffect(() => {
    elemRef.current?.style.setProperty(property, value ?? "", priority ?? "");
  }, [elemRef, property, value, priority]);

  return elemRef;
};
