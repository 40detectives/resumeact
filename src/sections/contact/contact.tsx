import type { ContactSection } from "@/types/resume-types";
import { FiPhone } from "react-icons/fi";
import { ImLink } from "react-icons/im";
import { SiMaildotru } from "react-icons/si";
import { SlLocationPin } from "react-icons/sl";
import styles from "./contact.module.css";

interface Props {
  data: ContactSection;
}

export const Contact: React.FC<Props> = ({ data }) => {
  return (
    <>
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
