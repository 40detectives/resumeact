import { clsx } from "clsx";
import styles from "./column.module.css";

interface Props {
  children?: React.ReactNode;
  type: "sidebar" | "main";
}

export const Column: React.FC<Props> = ({ children, type }) => {
  return (
    <section
      className={clsx(styles["column"], styles["layout-column"], styles[type])}
    >
      {children}
    </section>
  );
};
