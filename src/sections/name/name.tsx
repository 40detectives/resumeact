import type { NameSection } from "@/types/resume-types";
import styles from "./name.module.css";

interface Props {
  data: NameSection;
}

export const Name: React.FC<Props> = ({ data }) => {
  return (
    <>
      <h1>
        <span className={styles.firstname}>{data.firstName}</span>
        <span className={styles.lastname}>{data.lastName}</span>
      </h1>
    </>
  );
};
