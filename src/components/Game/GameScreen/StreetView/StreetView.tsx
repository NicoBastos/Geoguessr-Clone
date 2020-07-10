import React from "react";
import ReactStreetview from "react-streetview";
import classes from "./StreetView.module.css";
interface Props {
  difficulty: string | undefined;
}
//Fake key AIzaSyBKCeA2SUnKaec8XdxOTM-JUAtYvV1NXAg
// AIzaSyBTUFFAxn8LxEH8befAbCmFFRt7XQ5QK3A
const StreetView: React.FC<Props> = (props) => {
  const googleMapsApiKey = "AIzaSyBTUFFAxn8LxEH8befAbCmFFRt7XQ5QK3A";
  const streetViewPanoramaOptions = {
    position: { lat: 52.321945, lng: -106.584168 },
    pov: { heading: 100, pitch: 0 },
    zoom: 1,
    disableDefaultUI: false,
    showRoadLabels: false,
    zoomControl: false,
    clickToGo: true,
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
