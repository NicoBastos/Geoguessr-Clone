import React from "react";
import classes from "./StartButton.module.css";
import { Link } from "react-router-dom";
import { AppContext } from "../../../context/appContext";
interface Props {
  difficultySettings: {
    userSelectedDifficulty: boolean;
    difficulty: string;
  };
}
const StartButton: React.FC<Props> = (props) => {
  const { difficulty, userSelectedDifficulty } = props.difficultySettings;
  const button: JSX.Element = userSelectedDifficulty ? (
    <Link to="/game">
      <button className={classes.StartButton}>Start</button>
    </Link>
  ) : (
    <button className={classes.StartButton}>Start</button>
  );
  return (
    <React.Fragment>
      {button}
      <AppContext.Provider value={{ difficulty: difficulty }} />
    </React.Fragment>
  );
};
export default StartButton;
