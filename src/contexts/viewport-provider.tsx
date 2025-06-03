import { useState } from "react";
import { ViewportContext } from "./viewport-context";

interface Props {
  children?: React.ReactNode;
}

export const ViewportProvider: React.FC<Props> = ({ children }) => {
  const [minScale, setMinScale] = useState(0.15);
  const [scale, setScale] = useState(1);
  const [maxScale, setMaxScale] = useState(1.5);

  return (
    <ViewportContext.Provider value={{ scale, setScale, minScale, maxScale }}>
      {children}
    </ViewportContext.Provider>
  );
};
