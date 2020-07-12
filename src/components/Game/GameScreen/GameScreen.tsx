import React, { useContext, useState } from "react";
import { AppContext } from "../../../context/appContext";
import StreetView from "./StreetView/StreetView";
import classes from "./GameScreen.module.css";
import WorldMap from "./WorldMap/WorldMap";
import EndOfRound from "./EndOfRound/EndOfRound";
import Modal from "../Modal/Modal";
interface Game {
  round: number;
  points: number;
}
const GameScreen: React.FC = () => {
  const {
    difficulty,
    round,
    setRound,
    setCurrentRoundAnswer,
    currentRoundFinished,
    setCurrentRoundFished,
    setPoints,
    getRandomPosition,
    currentRoundAnswer,
    currentRoundGuess,
    setPointsEarned,
    setGuessDist,
  } = useContext(AppContext);
  const [gameFinished, setGameFinished] = useState(false);
  const CalcPointsEarned = (
    guess: { lat: number; lng: number },
    answer: { lat: number; lng: number }
  ) => {
    function getDistance(
      guess: { lat: number; lng: number },
      answer: { lat: number; lng: number }
    ) {
      // return distance in meters
      var lon1 = toRadian(answer.lng),
        lat1 = toRadian(answer.lat),
        lon2 = toRadian(guess.lng),
        lat2 = toRadian(guess.lat);

      var deltaLat = lat2 - lat1;
      var deltaLon = lon2 - lon1;

      var a =
        Math.pow(Math.sin(deltaLat / 2), 2) +
        Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(deltaLon / 2), 2);
      var c = 2 * Math.asin(Math.sqrt(a));
      var EARTH_RADIUS = 6371;
      return c * EARTH_RADIUS * 1000;
    }
    function toRadian(degree: number) {
      return (degree * Math.PI) / 180;
    }
    var distance = Math.floor(
      (getDistance(currentRoundGuess, currentRoundAnswer) / 1000) * 0.62137119
    );
    const pointsEarnedCalc = -2 * distance + 6371;
    setGuessDist(distance);
    setPointsEarned(pointsEarnedCalc);
    setPoints((prevPoints) => prevPoints + pointsEarnedCalc);
  };
  const endOfRoundHandler = () => {
    CalcPointsEarned(currentRoundGuess, currentRoundAnswer);
    if (round === 5) {
      setGameFinished(true);
    } else {
      setRound((prevRound) => prevRound + 1);
    }
    setCurrentRoundFished(true);
  };
  const handleNextRound = () => {
    console.log("next round");
    setCurrentRoundFished(false);
    setCurrentRoundAnswer(getRandomPosition());
  };
  return (
    <div className={classes.GameScreen}>
      <div className={classes.MapWrapper}>
        {currentRoundFinished ? (
          gameFinished ? (
            <p>EndScreen</p>
          ) : (
            <Modal show={currentRoundFinished}>
              {<EndOfRound handleNextRound={handleNextRound} />}
            </Modal>
          )
        ) : (
          <WorldMap handleEndOfRound={endOfRoundHandler} />
        )}
      </div>
      <div className={classes.StreetView}>
        <StreetView difficulty={difficulty} />
      </div>
    </div>
  );
};

export default GameScreen;
