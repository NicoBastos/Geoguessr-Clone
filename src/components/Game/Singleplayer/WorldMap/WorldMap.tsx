import React, { useState, useContext } from "react";
import classes from "./WorldMap.module.css";
import { Map, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import RoundInformationDisplay from "./RoundInfoDisplay/RoundInfoDisplay";
import ConfirmGuessButton from "./ConfirmGuessButton/ConfirmGuessButton";
import { AppContext } from "../../../../context/appContext";
interface Props {
  handleEndOfRound: () => void;
  className: any;
}
const WorldMap: React.FC<Props> = (props) => {
  const { currentRoundGuess, setCurrentRoundGuess } = useContext(AppContext);
  const icon = L.icon({
    iconUrl: require("../../../../static/marker.svg"),
    iconSize: [24, 24],
    iconAnchor: L.point(12, 24),
  });

  const [selected, setSelected] = useState(false);
  const handleMapClick = (e: any) => {
    setCurrentRoundGuess({ ...e.latlng });
    setSelected(true);
  };
  const tileLayer = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

  return (
    <div className={classes.WorldMapContainer}>
      <div className={classes.InfoDisplay}>
        <RoundInformationDisplay />
      </div>
      <Map
        center={[35, -45]}
        zoom={2}
        className={classes.Map}
        onClick={(e: any) => handleMapClick(e)}
      >
        {selected ? (
          <Marker
            position={[currentRoundGuess.lat, currentRoundGuess.lng]}
            icon={icon}
          />
        ) : (
          <p></p>
        )}
        <TileLayer url={tileLayer} />
      </Map>
      <div className={classes.ConfirmButton}>
        <ConfirmGuessButton
          selected={selected}
          handleEndOfRound={props.handleEndOfRound}
        />
      </div>
    </div>
  );
};
export default WorldMap;
