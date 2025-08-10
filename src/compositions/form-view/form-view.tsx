import { useViewContext } from "@/contexts/viewport-context";
import styles from "./form-view.module.css";
import type { ChangeEvent } from "react";
import { CgScrollV, CgScrollH } from "react-icons/cg";

interface Props {}

export const FormView: React.FC<Props> = () => {
  const { minScale, scale, setScale, maxScale, scrollMode, setScrollMode } =
    useViewContext();

  const handleRangeOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setScale(parseFloat(event.target.value));
  };

  const handleScrollModeOnClick = () => {
    const newScrollMode = scrollMode === "vertical" ? "horizontal" : "vertical";
    setScrollMode(newScrollMode);
  };

  return (
    <aside className={`editor-frame ${styles["aside-ui"]}`}>
      <div className="center">
        Scroll mode is {scrollMode}
        <button onClick={handleScrollModeOnClick}>
          {scrollMode === "vertical" ? (
            <CgScrollH size={35} />
          ) : (
            <CgScrollV size={35} />
          )}
        </button>
      </div>
      <p>
        <label htmlFor="scale-range">Scale: </label>
        <input
          id="scale-range"
          type="range"
          step="0.01"
          min={minScale}
          max={maxScale}
          value={scale}
          onChange={handleRangeOnChange}
        />
      </p>
      <p>Scale value is: {scale}</p>

      <p>
        <label>
          Surname: <input id="surname-input" type="text" />
        </label>
      </p>

      <p>
        <label htmlFor="lastname-input">Lastname: </label>
        <input id="lastname-input" type="text" />
      </p>

      <p>
        <label htmlFor="bio-text">Brief bio: </label>
        <textarea id="bio-text"></textarea>
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam fugit
        reprehenderit a consequuntur explicabo adipisci rem reiciendis sed! Ea
        quaerat tempora ratione qui cum deserunt perferendis maiores vitae
        nulla, adipisci ipsum laudantium itaque, quos distinctio deleniti! Quod,
        possimus eveniet ut delectus voluptatibus modi ea numquam.
      </p>
      <p>
        Dolores tenetur modi qui! Laboriosam adipisci facilis hic minus, animi
        enim numquam. Veritatis optio sed quam. Saepe hic voluptatibus,
        excepturi accusantium magnam maxime doloribus dolorum quam impedit
        soluta nam corrupti rem. Voluptatem fugiat incidunt exercitationem
        consequuntur, earum consectetur ut ratione eveniet. Voluptatibus
        mollitia molestiae doloribus.
      </p>
      <p>
        Eligendi eos tempora odit, obcaecati architecto sapiente mollitia alias?
        Totam minima pariatur dolorem vel eligendi beatae voluptatibus numquam
        quae, doloribus illo obcaecati itaque laboriosam unde, asperiores
        debitis dicta optio a consequatur tempore, nulla voluptatum similique.
        Nesciunt laudantium omnis maxime voluptate a rem, tempora officia
        assumenda?
      </p>
      <p>
        Doloribus suscipit excepturi exercitationem recusandae? Beatae, veniam
        repudiandae vero voluptatibus aliquid et quasi iusto? Repellat error eum
        qui dignissimos? Obcaecati odio animi libero harum quidem officia
        impedit amet. Natus soluta adipisci sed deserunt eum exercitationem,
        eligendi saepe minus, aliquid delectus officia ut, illum nobis.
        Consectetur.
      </p>
    </aside>
  );
};
