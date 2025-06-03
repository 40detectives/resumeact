import { useViewContext } from "@/contexts/viewport-context";
import { calcScaleFromWidth } from "@/utils/math";
import { debounce } from "@/utils/optimization";
import { useCallback, useEffect, useLayoutEffect, useRef } from "react";

interface Props {
  children?: React.ReactNode;
}

export const PagedView: React.FC<Props> = ({ children }) => {
  //const docRef = useRef<HTMLElement>(document.documentElement);
  const bodyRef = useRef<HTMLElement>(document.body);
  const documentViewerRef = useRef<HTMLDivElement>(null);

  const { scale, setScale, minScale, maxScale } = useViewContext();

  const setScaleFromWidth = useCallback(() => {
    // const baseHeight = 1123;
    // const maxWidth = 1280; // 1920/1280 = 1.5 <==> maxScale
    const maxWidth = 1440 / 2 + 400;
    const baseWidth = window.innerWidth;

    const newScale = calcScaleFromWidth(
      baseWidth,
      maxWidth,
      minScale,
      maxScale
    );

    /* console.log({
      baseWidth,
      maxWidth,
      newScale,
    }); */

    setScale(newScale);
  }, [minScale, maxScale, setScale]);

  useLayoutEffect(() => {
    bodyRef.current.style.setProperty("--page-scale", scale.toFixed(3));

    if (documentViewerRef.current) {
      const { height: finalHeight /* width: finalWidth */ } =
        documentViewerRef.current.getBoundingClientRect();
      const finalWidth = documentViewerRef.current
        .querySelector(".display-page")!
        .getBoundingClientRect().width;

      bodyRef.current.style.setProperty(
        "--scaled-height",
        `${finalHeight.toFixed(3)}px`
      );
      bodyRef.current.style.setProperty(
        "--scaled-width",
        `${finalWidth.toFixed(3)}px`
      );
    }
  }, [scale]);

  useLayoutEffect(() => {
    const delayedScaleDocumentView = debounce(setScaleFromWidth, 20);
    window.addEventListener("resize", delayedScaleDocumentView);

    setScaleFromWidth();

    return () => {
      window.removeEventListener("resize", delayedScaleDocumentView);
    };
  }, [setScaleFromWidth]);

  return (
    // outer div is a wrapper to help get the scaled size of paged-view
    <div className="scaled-size-holder">
      <div className="paged-view" ref={documentViewerRef}>
        {children}
      </div>
    </div>
  );
};
