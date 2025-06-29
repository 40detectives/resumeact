import type { RefObject } from "react";
import { createContext, useContext } from "react";

export type PagedScrollMode = "vertical" | "horizontal";
interface ViewDetailsContextType {
  scale: number; // ? does it make sense to refactor scale out to its own class?
  setScale: (s: number) => void;
  minScale: number;
  maxScale: number;
  scrollMode: PagedScrollMode;
  setScrollMode: (m: PagedScrollMode) => void;
  prevWindowWidth: RefObject<number>;
}

export const ViewportContext = createContext<ViewDetailsContextType | null>(
  null
);

export const useViewContext = () => {
  const viewportContext = useContext(ViewportContext);

  if (!viewportContext) {
    throw new Error("ViewportContext has to be used within <ViewportProvider>");
  }

  return viewportContext;
};
