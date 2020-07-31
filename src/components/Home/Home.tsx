import React, { useState, useEffect, useContext } from "react";
import classes from "./Home.module.css";
import { ReactComponent as Logo } from "../../static/geoguesser_logo.svg";
import DiffcultySelector from "./DifficultySelector/DifficultySelector";
import MultiplayerButton from "./MultiplayerButton/MultiplayerButton";
import SingleplayerButton from "./SingleplayerButton/SingleplayerButton";
import { AppContext } from "../../context/appContext";

const Home: React.FC = () => {
  const {
    difficulty,
    setRound,
    setPoints,
    setCurrentRoundFished,
    setDifficulty,
  } = useContext(AppContext);
  const userSelectedDifficulty: boolean = Boolean(difficulty) ? true : false;
  useEffect(() => {
    setRound(1);
    setPoints(0);
    setCurrentRoundFished(false);
  });
  return (
    <div className={classes.Home}>
      <div className={classes.logo}>
        <Logo className={classes.logoImg} />
      </div>
      <p className={classes.paragraph}>
        Geoguessr-Clone is a geography discovery game which takes you around the
        world and challenges your ability to recognize your surroundings
      </p>
      <div className={classes.gameSettings}>
        <div className={classes.difficultySelector}>
          <DiffcultySelector difficulty={(button) => setDifficulty(button)} />
        </div>
        {/* <input /> */}
        {/* 
        <div className={classes.SingleplayerButtonContainer}>
          <MultiplayerButton />
        </div> */}
        <div className={classes.MultiplayerButtonContaienr}>
          <SingleplayerButton />
        </div>
      </div>
    </div>
  );
};

export default Home;
