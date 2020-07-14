import React, { useContext } from "react";
import classes from "./EndScreen.module.css";
import { Map, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import { AppContext } from "../../../../context/appContext";
import { Link } from "react-router-dom";

const EndScreen: React.FC = () => {
  const {
    currentRoundGuess,
    currentRoundAnswer,
    pointsEarned,
    guessDist,
  } = useContext(AppContext);
  const lat = currentRoundGuess.lat;
  const lng = currentRoundGuess.lng;

  const icon = L.icon({ iconUrl: require("../../../../static/marker.svg") });
  return (
    <div className={classes.EndOfRound}>
      <div className={classes.Map}>
        <Map
          center={{ lat: lat - 20, lng: lng }}
          zoom={2}
          className={classes.Map}
        >
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
        <div className={classes.DataContainer}>
          <div className={classes.Data1}>
            <p>{pointsEarned} PTS</p>
            You got {pointsEarned} points for your guess.
          </div>
          <div className={classes.Data2}>
            <p>{guessDist} Miles Away</p>
            Your guess was {guessDist} miles away from the correct location!
          </div>
          <div className={classes.Data3}></div>
        </div>
        <div className={classes.PlayAgainButtonContainer}>
          <Link to="/">
            <button className={classes.NextRoundButton}>PLAY AGAIN</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EndScreen;
