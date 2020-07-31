import React, { useContext } from "react";
import ReactStreetview from "./ReactStreetView/ReactStreetView";
import classes from "./StreetView.module.css";
import { AppContext } from "../../../../context/appContext";
interface Props {
  difficulty: string | undefined;
  coordinates: { lat: number; lng: number };
}

const StreetView: React.FC<Props> = (props) => {
  const { currentRoundAnswer, difficulty } = useContext(AppContext);

  const googleMapsApiKey = process.env.REACT_APP_MAPS_API_KEY;
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
