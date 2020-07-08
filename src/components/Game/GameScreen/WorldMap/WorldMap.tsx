import React from "react";
import classes from "./WorldMap.module.css";
import { Map, TileLayer, Marker } from "react-leaflet";
import RoundInformationDisplay from "./RoundInformationDisplay/RoundInformationDisplay";

const WorldMap: React.FC = () => {
  return (
    <div className={classes.WorldMapContainer}>
      <RoundInformationDisplay />
      <Map center={[45.4, -75.7]} zoom={3} className={classes.Map}>
        lat: 52.321945, lng: -106.584168
        <Marker position={[52.321945, -106.584168]} />
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>
    </div>
  );
};
export default WorldMap;
