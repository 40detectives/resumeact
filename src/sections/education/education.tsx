import type { Education as EducationSection } from "@/types/resume-types";
import { Fragment } from "react";
import styles from "./education.module.css";

interface Props {
  data: EducationSection[];
}

export const Education: React.FC<Props> = ({ data }) => {
  return (
    <>
      <h2 className={styles.main}>Formación Académica</h2>
      {data.map((edu, i) => (
        <Fragment key={i}>
          <h3>{edu.type}</h3>
          <h4>{edu.institution}</h4>
          <span>{edu.location}</span>
          {edu.website && <span>{edu.website.toString()}</span>}
          <div>{edu.interval.start.toString()}</div>
          <div>{edu.interval.end.toString()}</div>
          <p>{edu.summary?.main}</p>
          {edu.summary?.bullets && (
            <ul>
              {edu.summary.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          )}
        </Fragment>
      ))}
    </>
  );
};
