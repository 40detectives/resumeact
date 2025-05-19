import type { BasicSection } from "@/types/resume";
import { FiPhone } from "react-icons/fi";
import { ImLink } from "react-icons/im";
import { SiMaildotru } from "react-icons/si";
import { SlLocationPin } from "react-icons/sl";
import styles from "./basic.module.css";

interface Props {
  data: BasicSection;
}

export const Basic: React.FC<Props> = ({ data }) => {
  return (
    <>
      <h1>
        <span className={styles.firstname}>{data.firstName}</span>
        <span className={styles.lastname}>{data.lastName}</span>
      </h1>
      <h3 className={styles.crumb}>
        <SiMaildotru size={"1.75em"} /> {data.email}
      </h3>
      <h3 className={styles.crumb}>
        <FiPhone size={"1.75em"} /> {data.phone}
      </h3>
      <h3 className={styles.crumb}>
        <SlLocationPin className="bolder-react-icon" size={"1.75em"} />{" "}
        {data.location}
      </h3>
      {data.website && (
        <h3 className={styles.crumb}>
          <ImLink size={"1.75em"} /> {data.website}
        </h3>
      )}
    </>
  );
};
