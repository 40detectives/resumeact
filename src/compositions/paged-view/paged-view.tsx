import { useViewContext } from "@/contexts/viewport-context";
import { useEffect, useLayoutEffect, useRef } from "react";

interface Props {
  children?: React.ReactNode;
}

export const PagedView: React.FC<Props> = ({ children }) => {
  const bodyRef = useRef<HTMLElement>(document.body);
  const pagedViewRef = useRef<HTMLDivElement>(null);

  const { scale } = useViewContext();

  useLayoutEffect(() => {
    bodyRef.current.style.setProperty("--page-scale", scale.toFixed(3));

    if (pagedViewRef.current) {
      const { height: finalHeight /* width: finalWidth */ } =
        pagedViewRef.current.getBoundingClientRect();
      const finalWidth = pagedViewRef.current
        //.querySelector(".display-page")!
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

  return (
    // outer div is a wrapper to help get the scaled size of paged-view
    <div className="scaled-size-holder">
      <div className="paged-view" ref={pagedViewRef}>
        {children}
      </div>
    </div>
  );
};
