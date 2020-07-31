import React, { useContext, useEffect } from "react";
import classes from "./SingleplayerButton.module.css";
import { Link } from "react-router-dom";
import { AppContext } from "../../../context/appContext";

const StartButton: React.FC = (props) => {
  const { difficulty } = useContext(AppContext);
  const button = difficulty ? (
    <Link to="/singleplayer">
      <button className={classes.StartButton}>SINGLE PLAYER</button>
    </Link>
  ) : (
    <button className={classes.StartButton}>SINGLE PLAYER</button>
  );

  return <>{button}</>;
};
export default StartButton;
