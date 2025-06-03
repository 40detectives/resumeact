import styles from "./preview-frame.module.css";

interface Props {
  children?: React.ReactNode;
}

export const PreviewFrame: React.FC<Props> = ({ children }) => {
  return <section className="preview-frame">{children}</section>;
};
