import React, { useContext, useState } from "react";
import { AppContext } from "../../../context/appContext";
import StreetView from "./StreetView/StreetView";
import classes from "./GameScreen.module.css";
import WorldMap from "./WorldMap/WorldMap";

interface Game {
  round: number;
  points: number;
}
const GameScreen: React.FC = () => {
  const { settings } = useContext(AppContext);

  const [roundFinished, setRoundFinished] = useState<boolean>(false);
  const [game, setGame] = useState<Game>({
    round: 0,
    points: 0,
  });
  return (
    <div className={classes.GameScreen}>
      {/* <Modal>{roundSummary}</Modal> */}
      <div className={classes.MapWrapper}>
        {roundFinished ? <p>Modal with round summary</p> : <WorldMap />}
      </div>
      <div className={classes.StreetView}>
        <StreetView difficulty={settings} />
      </div>
    </div>
  );
};

export default GameScreen;
