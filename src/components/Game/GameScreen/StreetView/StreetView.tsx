import React, { useContext, useRef, useEffect, useState } from "react";
import ReactStreetview from "./ReactStreetView/ReactStreetView";
import classes from "./StreetView.module.css";
import { AppContext } from "../../../../context/appContext";
interface Props {
  difficulty: string | undefined;
  coordinates: { lat: number; lng: number };
}
interface Position {
  lat: number;
  lng: number;
}
//Fake key AIzaSyBKCeA2SUnKaec8XdxOTM-JUAtYvV1NXAg
// AIzaSyBTUFFAxn8LxEH8befAbCmFFRt7XQ5QK3A
const StreetView: React.FC<Props> = (props) => {
  const { currentRoundAnswer, difficulty } = useContext(AppContext);

  const googleMapsApiKey = "AIzaSyBTUFFAxn8LxEH8befAbCmFFRt7XQ5QK3A";
  let streetViewPanoramaOptions;
  switch (difficulty) {
    case "easy":
      streetViewPanoramaOptions = {
        position: { lat: props.coordinates.lat, lng: props.coordinates.lng },
        pov: { heading: 100, pitch: 0 },
        zoom: 1,
        disableDefaultUI: true,
        showRoadLabels: true,
        zoomControl: true,
        clickToGo: true,
      };
      console.log("streetview");
      break;
    case "medium":
      streetViewPanoramaOptions = {
        position: { lat: props.coordinates.lat, lng: props.coordinates.lng },
        pov: { heading: 100, pitch: 0 },
        zoom: 1,
        disableDefaultUI: true,
        showRoadLabels: false,
        zoomControl: false,
        clickToGo: true,
        scrollwheel: false,
      };
      break;
    case "hard":
      streetViewPanoramaOptions = {
        position: { lat: props.coordinates.lat, lng: props.coordinates.lng },
        pov: { heading: 100, pitch: 0 },
        zoom: 1,
        disableDefaultUI: true,
        showRoadLabels: false,
        zoomControl: false,
        clickToGo: false,
        panControlOption: false,
        scrollwheel: false,
      };
      break;
  }
  return (
    <ReactStreetview
      apiKey={googleMapsApiKey}
      streetViewPanoramaOptions={streetViewPanoramaOptions}
      className={classes.StreetViewComponent}
      position={currentRoundAnswer}
    />
  );
};

export default StreetView;
