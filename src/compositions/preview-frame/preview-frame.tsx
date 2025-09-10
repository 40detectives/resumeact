import { useViewContext } from "@/contexts/viewport-context";
import type { ThemeNames } from "@/types/theme-types";
import { calcScaleAndClamp } from "@/utils/math";
import { debounce } from "@/utils/optimization";
import { clsx } from "clsx";
import { useCallback, useLayoutEffect, useRef } from "react";
import styles from "./preview-frame.module.css";

interface Props {
  theme: ThemeNames;
  children?: React.ReactNode;
}

export const PreviewFrame: React.FC<Props> = ({ theme, children }) => {
  const previewRef = useRef<HTMLElement>(null);

  const {
    setScale,
    minScale,
    maxScale,
    scrollMode,
    setScrollMode,
    prevWindowWidth,
  } = useViewContext();

  const autoPickBestScroll = useCallback(() => {
    const reversedScroll =
      scrollMode === "vertical" ? "horizontal" : "vertical";

    if (prevWindowWidth.current <= 600 && window.innerWidth > 600) {
      if (scrollMode === "horizontal") {
        setScrollMode(reversedScroll);
      }
    } else if (prevWindowWidth.current > 600 && window.innerWidth <= 600) {
      if (scrollMode === "vertical") {
        setScrollMode(reversedScroll);
      }
    }
    prevWindowWidth.current = window.innerWidth;
  }, [prevWindowWidth, scrollMode, setScrollMode]);

  const setScaleFromResizeOb = useCallback(
    (entries: ResizeObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.contentBoxSize?.[0]) {
          const maxWidth = 1280 * 0.7;
          const baseWidth = entry.borderBoxSize[0].inlineSize;
          const newWidthScale = calcScaleAndClamp({
            actualLength: baseWidth,
            maxLength: maxWidth,
            minScale,
            maxScale,
          });

          const maxHeight = 720 * 1.75;
          const baseHeight = entry.borderBoxSize[0].blockSize;
          const newHeightScale = calcScaleAndClamp({
            actualLength: baseHeight,
            maxLength: maxHeight,
            minScale,
            maxScale,
          });

          /* console.log({
            baseWidth,
            maxWidth,
            baseHeight,
            maxHeight,
            newHeightScale,
            newWidthScale,
          }); */

          autoPickBestScroll();

          const newScale =
            scrollMode === "vertical" ? newWidthScale : newHeightScale;

          setScale(newScale);
        }
      }
    },
    [minScale, maxScale, autoPickBestScroll, scrollMode, setScale]
  );

  useLayoutEffect(() => {
    const observedTarget = previewRef.current;
    if (!observedTarget) return;
    const delayedScaleFromResizeOb = debounce(setScaleFromResizeOb, 20);

    const resizePreviewObserver = new ResizeObserver(delayedScaleFromResizeOb);

    resizePreviewObserver.observe(observedTarget);

    const errorLogger = (e: ErrorEvent) => {
      console.error(e.message);
    };
    window.addEventListener("error", errorLogger);

    return () => {
      resizePreviewObserver.unobserve(observedTarget);
      window.removeEventListener("error", errorLogger);
    };
  }, [setScaleFromResizeOb]);

  return (
    <main
      className={clsx(
        "preview-frame",
        styles["main-ui"],
        `${scrollMode}-scroll`
      )}
      ref={previewRef}
      data-theme={theme}
    >
      {children}
    </main>
  );
};
