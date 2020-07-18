import React, { useState, useEffect } from "react";
import classes from "./Home.module.css";
import { ReactComponent as Logo } from "../../static/geoguesser_logo.svg";
import DiffcultySelector from "./DifficultySelector/DifficultySelector";
import StartButton from "../Home/StartButton/StartButton";
const Home: React.FC = () => {
  const [difficulty, setDifficulty] = useState<string>("");
  const userSelectedDifficulty: boolean = Boolean(difficulty) ? true : false;
  useEffect(() => {});
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
        <div className={classes.StartButtonContainer}>
          <StartButton
            difficultySettings={{ userSelectedDifficulty, difficulty }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;