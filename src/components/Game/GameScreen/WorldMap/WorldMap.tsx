import React, { useState } from "react";
import classes from "./WorldMap.module.css";
import { Map, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import RoundInformationDisplay from "./RoundInfoDisplay/RoundInfoDisplay";
import ConfirmGuessButton from "./ConfirmGuessButton/ConfirmGuessButton";
interface MarkerPosition {
  lat: number;
  lng: number;
}
const WorldMap: React.FC = () => {
  const icon = L.icon({ iconUrl: require("../../../../static/marker.svg") });
  const [markerPosition, setMarkerPosition] = useState<MarkerPosition>({
    lat: 52.321945,
    lng: -106.584168,
  });

  const handleMapClick = (e: any) => {
    let clickLoc = e.latlng;
    setMarkerPosition({ ...clickLoc });
    console.log(clickLoc, markerPosition);
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
        <Marker
          position={[markerPosition.lat, markerPosition.lng]}
          icon={icon}
        />
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>
      <div className={classes.ConfirmButton}>
        <ConfirmGuessButton />
      </div>
    </div>
  );
};
export default WorldMap;
