import CallIcon from "@/shared/ui/material-icons/call.svg?no-inline";
import MailIcon from "@/shared/ui/material-icons/email.svg?no-inline";
import HomeIcon from "@/shared/ui/material-icons/home-pin.svg?no-inline";
import WebIcon from "@/shared/ui/material-icons/web.svg?no-inline";
import type { ContactSection } from "@/types/resume-types";
import { clsx } from "clsx";
import { ReactSVG } from "react-svg";
import styles from "./contact.module.css";

interface Props {
  data: ContactSection;
  iconStyle?: "pill" | "outline";
  layout?: "one-row" | "multiple-row";
}

export const Contact: React.FC<Props> = ({
  data,
  iconStyle = "outline",
  layout = "multiple-row",
}) => {
  const iconClassNames = clsx(
    "injected-icon",
    styles[iconStyle],
    styles["icon"]
  );

  return (
    <ul className={clsx(styles["contact-section"], styles[layout])}>
      <li className={styles["contact-method"]}>
        <ReactSVG className={iconClassNames} src={MailIcon} />
        <address className={styles["data"]}>{data.email}</address>
      </li>
      <li className={styles["contact-method"]}>
        <ReactSVG className={iconClassNames} src={CallIcon} />
        <address className={styles["data"]}>{data.phone}</address>
      </li>
      <li className={styles["contact-method"]}>
        <ReactSVG className={iconClassNames} src={HomeIcon} />
        <address className={styles["data"]}>{data.location}</address>
      </li>
      {data.website && (
        <li className={styles["contact-method"]}>
          <ReactSVG className={iconClassNames} src={WebIcon} />
          <address className={styles["data"]}>{data.website}</address>
        </li>
      )}
    </ul>
  );
};
