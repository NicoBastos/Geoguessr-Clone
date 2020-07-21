import React, { useContext, useEffect } from "react";
import classes from "./MultiplayerButton.module.css";
import { Link } from "react-router-dom";
import { AppContext } from "../../../context/appContext";
import { socketContext } from "../../../context/socketContext";

const MultiplayerButton: React.FC = () => {
  const { setPoints, setRound, setCurrentRoundFished } = useContext(AppContext);

  const { socket, handleStart } = useContext(socketContext);

  useEffect(() => {
    setPoints(0);
    setRound(1);
    setCurrentRoundFished(false);
  });

  return (
    <Link to="/multiplayer">
      <button className={classes.StartButton} onClick={() => handleStart()}>
        MULTIPLAYER
      </button>
    </Link>
  );
};
export default MultiplayerButton;
