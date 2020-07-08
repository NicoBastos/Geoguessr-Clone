import React, { useRef } from "react";
import ReactStreetview from "react-streetview";
import classes from "./StreetView.module.css";
interface Props {
  difficulty: string | undefined;
}
const StreetView: React.FC<Props> = (props) => {
  const googleMapsApiKey = "AIzaSyBKCeA2SUnKaec8XdxOTM-JUAtYvV1NXAg";
  const streetViewPanoramaOptions = {
    position: { lat: 52.321945, lng: -106.584168 },
    pov: { heading: 100, pitch: 0 },
    zoom: 1,
    disableDefaultUI: true,
    showRoadLabels: false,
    zoomControl: false,
    clickToGo: false,
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#eeeeee",
      }}
    >
      <ReactStreetview
        apiKey={googleMapsApiKey}
        streetViewPanoramaOptions={streetViewPanoramaOptions}
        className={classes.StreetViewComponent}
      />
    </div>
  );
};

export default StreetView;
