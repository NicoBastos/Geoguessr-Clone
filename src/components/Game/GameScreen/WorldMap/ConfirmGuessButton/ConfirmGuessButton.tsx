import React from "react";
import classes from "./ConfirmGuessButton.module.css";

interface Props {
  selected: boolean;
  handleEndOfRound: () => any;
}
const ConfirmGuessButton: React.FC<Props> = (props) => {
  const handleClick = () => {
    if (props.selected) {
      props.handleEndOfRound();
    }
  };
  return (
    <button className={classes.GuessButton} onClick={() => handleClick()}>
      MAKE A GUESS
    </button>
  );
};

export default ConfirmGuessButton;
