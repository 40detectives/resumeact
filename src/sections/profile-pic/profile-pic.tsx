import { clsx } from "clsx";
import styles from "./profile-pic.module.css";

interface Props {
  firstName: string;
  picture: string;
  bgAccentColor: string;
  variant: string;
  picSize?: number;
}

export const ProfilePicture: React.FC<Props> = ({
  firstName,
  picture,
  bgAccentColor,
  variant,
  picSize = 135,
}) => {
  return (
    <figure className="profile-picture-section">
      <img
        style={
          {
            "--pic-size": picSize,
            "--bg-accent-color": bgAccentColor,
          } as React.CSSProperties
        }
        className={clsx(styles[`variant-${variant}`], styles["profile-pic"])}
        src={picture}
        alt={`${firstName}'s profile pic`}
        width={picSize}
        height={picSize}
      />
    </figure>
  );
};
