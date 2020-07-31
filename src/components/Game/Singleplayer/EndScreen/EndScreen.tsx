import React, { useContext } from "react";
import classes from "./EndScreen.module.css";
import { Map, TileLayer, Marker, Polyline } from "react-leaflet";
import L from "leaflet";
import { AppContext } from "../../../../context/appContext";
import { Link } from "react-router-dom";
import ptsIcon from "../../../../static/score.svg";
import milesIcon from "../../../../static/miles.svg";
import shareIcon from "../../../../static/share.svg";
const EndScreen: React.FC = () => {
  const {
    currentRoundGuess,
    currentRoundAnswer,
    guessDist,
    points,
  } = useContext(AppContext);
  const lat = currentRoundGuess.lat;
  const lng = currentRoundGuess.lng;
  const icon = L.icon({
    iconUrl: require("../../../../static/marker.svg"),
    iconSize: [24, 24],
    iconAnchor: L.point(12, 24),
  });
  const point1 = new L.LatLng(lat, lng);
  const point2 = new L.LatLng(currentRoundAnswer.lat, currentRoundAnswer.lng);
  const pointList = [point1, point2];

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
          <Polyline positions={pointList} style={{ color: "red" }} />
        </Map>
      </div>
      <div className={classes.InfoContainer}>
        <div className={classes.DataContainer}>
          <div className={classes.Data}>
            <img alt="Points Icon" src={ptsIcon} />
            <p>{points} PTS</p>
            You got {points} total points for your guesses.
          </div>
          <div className={classes.Data2}>
            <img alt="Distance Icon" src={milesIcon} />
            <p>{guessDist} Miles </p>
            Your last guess was {guessDist} miles away from the correct
            location.
          </div>
          <div className={classes.Data3}>
            <img alt="Distance Icon" src={shareIcon} />
            <p>Share</p>
            Share this project if you liked it.
          </div>
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
