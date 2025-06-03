import { useViewContext } from "@/contexts/viewport-context";
import styles from "./form-view.module.css";
import type { ChangeEvent } from "react";

interface Props {}

export const FormView: React.FC<Props> = () => {
  const { minScale, scale, setScale, maxScale } = useViewContext();

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setScale(parseFloat(event.target.value));
  };

  return (
    <aside className={`aside-editor ${styles["aside-ui"]}`}>
      <input
        type="range"
        step="0.01"
        min={minScale}
        max={maxScale}
        value={scale}
        onChange={handleOnChange}
      />
      <p>Scale: {scale}</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
        dolor eveniet molestiae, officiis architecto a dignissimos nulla laborum
        excepturi omnis illum! Natus beatae quidem voluptas, sed voluptates
        nostrum id cupiditate.
      </p>
      <p>
        Autem nisi ducimus alias placeat eligendi sunt quasi, odio distinctio
        possimus voluptatum sint nemo sed fugiat tenetur praesentium cumque
        corporis ea reiciendis quis doloremque quidem ab exercitationem. Iusto,
        odit rerum!
      </p>
    </aside>
  );
};
