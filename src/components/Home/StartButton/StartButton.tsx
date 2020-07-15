import React, { useContext, useEffect } from "react";
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
  const {
    setDifficulty,
    setPoints,
    setRound,
    setCurrentRoundFished,
  } = useContext(AppContext);

  useEffect(() => {
    setDifficulty(difficulty);
    setPoints(0);
    setRound(1);
    setCurrentRoundFished(false);
  });
  const button: JSX.Element = userSelectedDifficulty ? (
    <Link to="/game">
      <button className={classes.StartButton}>START GAME</button>
    </Link>
  ) : (
    <button className={classes.StartButton}>START GAME</button>
  );
  return <React.Fragment>{button}</React.Fragment>;
};
export default StartButton;
