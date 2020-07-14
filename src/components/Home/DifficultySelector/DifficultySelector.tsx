import React, { useState } from "react";
import classes from "./DifficultySelector.module.css";

interface Props {
  difficulty: (button: string) => void;
}
const DiffcultySelector: React.FC<Props> = (props) => {
  const [selected, setSelected] = useState<string>("");
  const easyButtonClass =
    selected === "easy" ? classes.EasyButtonSelected : classes.EasyButton;
  const mediumButtonClass =
    selected === "medium" ? classes.MediumButtonSelected : classes.MediumButton;
  const hardButtonClass =
    selected === "hard" ? classes.HardButtonSelected : classes.HardButton;
  const handleClick = (button: string) => {
    setSelected(button);
    props.difficulty(button);
  };
  return (
    <div className={classes.DiffcultySelector}>
      <div className={classes.ButtonsContainer}>
        <button className={easyButtonClass} onClick={() => handleClick("easy")}>
          Easy
        </button>
        <button
          className={mediumButtonClass}
          onClick={() => handleClick("medium")}
        >
          Medium
        </button>
        <button className={hardButtonClass} onClick={() => handleClick("hard")}>
          Hard
        </button>
      </div>
      {selected === "easy" ? (
        <p>Roads are labeled, you can move and look around freely.</p>
      ) : selected === "medium" ? (
        <p>Roads are not labeled, zoom is disabled and you can't pan around</p>
      ) : (
        <p>
          Roads are not labaled, zoom is disabled and you can't pan or move
          around.
        </p>
      )}
    </div>
  );
};

export default DiffcultySelector;
