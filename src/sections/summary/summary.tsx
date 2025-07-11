import type { SummarySection } from "@/types/resume-types";
import styles from "./summary.module.css";

interface Props {
  data: SummarySection;
}

export const Summary: React.FC<Props> = ({ data }) => {
  return (
    <>
      <p className={styles.main}>
        Soy <span className={styles["job-title"]}>{data.main}</span>
      </p>
    </>
  );
};
