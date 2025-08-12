import styles from "./column-layout.module.css";
import { clsx } from "clsx";

interface Props {
  variant: "left-sidebar" | "right-sidebar";
  children?: React.ReactNode;
}

export const ColumnLayout: React.FC<Props> = ({ variant, children }) => {
  return (
    <div
      className={clsx(
        variant && `variant ${styles[variant]}`,
        styles["column-layout"]
      )}
    >
      {children}
    </div>
  );
};
