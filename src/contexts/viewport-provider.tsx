import { useRef, useState } from "react";
import { ViewportContext } from "./viewport-context";
import type { PagedScrollMode } from "./viewport-context";

interface Props {
  children?: React.ReactNode;
}

const BREAKPOINT_WIDTH = 600;

export const ViewportProvider: React.FC<Props> = ({ children }) => {
  const [minScale, setMinScale] = useState(0.15);
  const [scale, setScale] = useState(1);
  const [maxScale, setMaxScale] = useState(1.5);
  const [scrollMode, setScrollMode] = useState<PagedScrollMode>(
    window?.innerWidth <= BREAKPOINT_WIDTH ? "horizontal" : "vertical"
  );
  const prevWindowWidth = useRef(window.innerWidth);

  return (
    <ViewportContext.Provider
      value={{
        scale,
        setScale,
        minScale,
        maxScale,
        scrollMode,
        setScrollMode,
        prevWindowWidth,
      }}
    >
      {children}
    </ViewportContext.Provider>
  );
};
