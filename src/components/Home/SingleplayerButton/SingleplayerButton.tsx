import React, { useContext, useEffect } from "react";
import classes from "./SingleplayerButton.module.css";
import { Link } from "react-router-dom";
import { AppContext } from "../../../context/appContext";
import { socketContext } from "../../../context/socketContext";

const StartButton: React.FC = (props) => {
  const { setPoints, setRound, setCurrentRoundFished } = useContext(AppContext);

  return (
    <Link to="/singleplayer">
      <button className={classes.StartButton}>SINGLE PLAYER</button>;
    </Link>
  );
};
export default StartButton;
