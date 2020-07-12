import React, { useContext } from "react";
import classes from "./EndOfRound.module.css";
import { Map, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import { AppContext } from "../../../../context/appContext";
interface Props {
  handleNextRound: () => any;
}
const EndOfRound: React.FC<Props> = (props) => {
  const {
    currentRoundGuess,
    currentRoundAnswer,
    pointsEarned,
    guessDist,
  } = useContext(AppContext);
  const icon = L.icon({ iconUrl: require("../../../../static/marker.svg") });
  return (
    <div className={classes.EndOfRound}>
      <div className={classes.Map}>
        <Map center={currentRoundGuess} zoom={2} className={classes.Map}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker
            position={[currentRoundGuess.lat, currentRoundGuess.lng]}
            icon={icon}
          />
          <Marker
            position={[currentRoundAnswer.lat, currentRoundAnswer.lng]}
            icon={icon}
          />
        </Map>
      </div>
      <div className={classes.InfoContainer}>
        <p>{guessDist} miles away</p>
        <p>
          Your guess was {guessDist} miles away from the correct location! You
          got
          {" " + pointsEarned} points for your guess.
        </p>
        <button
          className={classes.NextRoundButton}
          onClick={() => props.handleNextRound()}
        >
          NEXT ROUND
        </button>
      </div>
    </div>
  );
};

export default EndOfRound;
