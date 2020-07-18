import React, { useContext, useState, useRef } from "react";
import { AppContext } from "../../../context/appContext";
import StreetView from "./StreetView/StreetView";
import classes from "./GameScreen.module.css";
import WorldMap from "./WorldMap/WorldMap";
import EndOfRound from "./EndOfRound/EndOfRound";
import Modal from "../Modal/Modal";
import EndScreen from "../GameScreen/EndScreen/EndScreen";
import { Transition } from "react-spring/renderprops";
import { animated } from "react-spring/";
interface Game {
  round: number;
  points: number;
}
interface TransitionStyle {
  transform?: string | number;
  opacity: number;
}

const GameScreenTest: React.FC = () => {
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
    const pointsEarnedCalc = -distance + 7926;
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
    setCurrentRoundFished(false);
    setCurrentRoundAnswer(getRandomPosition());
  };

  return (
    <div className={classes.GameScreen}>
      <div className={classes.MapWrapper}>
        <Transition
          items={!currentRoundFinished}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
          config={{ duration: 300 }}
        >
          {(show) =>
            show
              ? (props) => (
                  // Remember, gotta give it a className and {height: 100%};
                  <animated.div style={props} className={classes.DIV}>
                    <WorldMap
                      handleEndOfRound={endOfRoundHandler}
                      className={classes.Map}
                    />
                  </animated.div>
                )
              : gameFinished
              ? (props) => (
                  // Remember, gotta give it a className and {height: 100%};
                  <animated.div style={props} className={classes.DIV}>
                    <Modal show={currentRoundFinished}>
                      <EndScreen />
                    </Modal>
                  </animated.div>
                )
              : (props) => (
                  // Remember, gotta give it a className and {height: 100%};
                  <animated.div style={props} className={classes.DIV}>
                    <Modal show={currentRoundFinished}>
                      <EndOfRound handleNextRound={handleNextRound} />
                    </Modal>
                  </animated.div>
                )
          }
        </Transition>
      </div>
      <div className={classes.StreetView}>
        <StreetView difficulty={difficulty} coordinates={currentRoundAnswer} />
      </div>
    </div>
  );
};

export default GameScreenTest;
