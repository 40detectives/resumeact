import CallIcon from "@/shared/ui/material-icons/call.svg?no-inline";
import MailIcon from "@/shared/ui/material-icons/email.svg?no-inline";
import HomeIcon from "@/shared/ui/material-icons/home-pin.svg?no-inline";
import WebIcon from "@/shared/ui/material-icons/web.svg?no-inline";
import type { ContactSection } from "@/types/resume-types";
import { clsx } from "clsx";
import { ReactSVG } from "react-svg";
import styles from "./contact.module.css";
import type {
  ColumnSpan,
  CSSInheritance,
  JustifyItems,
} from "@/types/styleprops-types";
import { useThemeContext } from "@/contexts/theme-context";
import { useRef } from "react";
import { useCSSCustomProperties } from "@/shared/hooks/styleprops";
import type { ThemePalette } from "@/types/theme-types";

interface Props {
  data: ContactSection;
  iconStyle?: "pill" | "outline";
  columnSpan?: ColumnSpan;
  palette?: ThemePalette;

  justifySelf?: JustifyItems | CSSInheritance;
  justifyItems?: JustifyItems | CSSInheritance;
}

export const Contact: React.FC<Props> = ({
  data,
  iconStyle = "outline",
  columnSpan = "col-span-1",
  justifySelf,
  justifyItems,
  palette,
}) => {
  const { theme } = useThemeContext();
  const ulRef = useRef<HTMLUListElement>(null);

  useCSSCustomProperties(ulRef, {
    "--justify-self": justifySelf,
    "--justify-items": justifyItems,
    "--palette-0": palette?.[0],
    "--palette-1": palette?.[1],
    "--palette-2": palette?.[2],
    "--palette-3": palette?.[3],
  });

  const iconClassNames = clsx(
    "injected-icon",
    styles["icon"],
    styles[iconStyle]
  );

  return (
    <ul
      ref={ulRef}
      className={clsx(
        styles["contact-section"],
        styles[theme],
        columnSpan,
        justifyItems && "justify-items",
        justifySelf && "justify-self"
      )}
    >
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
