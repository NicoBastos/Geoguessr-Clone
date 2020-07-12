import React, { useState, useContext } from "react";
import classes from "./WorldMap.module.css";
import { Map, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import RoundInformationDisplay from "./RoundInfoDisplay/RoundInfoDisplay";
import ConfirmGuessButton from "./ConfirmGuessButton/ConfirmGuessButton";
import { AppContext } from "../../../../context/appContext";
interface Props {
  handleEndOfRound: () => void;
}
const WorldMap: React.FC<Props> = (props) => {
  const { currentRoundGuess, setCurrentRoundGuess } = useContext(AppContext);
  const icon = L.icon({ iconUrl: require("../../../../static/marker.svg") });

  const [selected, setSelected] = useState<boolean>(false);
  const handleMapClick = (e: any) => {
    setCurrentRoundGuess({ ...e.latlng });
    setSelected(true);
  };

  return (
    <div className={classes.WorldMapContainer}>
      <div className={classes.InfoDisplay}>
        <RoundInformationDisplay />
      </div>
      <Map
        center={[45.4, -75.7]}
        zoom={3}
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
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
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
