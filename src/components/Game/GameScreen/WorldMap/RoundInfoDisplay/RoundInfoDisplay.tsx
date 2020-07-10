import React from "react";
import classes from "./RoundInfoDisplay.module.css";

const RoundInfoDisplay: React.FC = () => {
  return (
    <div className={classes.RoundInfoContainer}>
      <div className={classes.RoundContainer}>
        <p className={classes.Title}>Round</p>
        <p className={classes.Data}>1/5</p>
      </div>
      <div className={classes.PointsContainer}>
        <p className={classes.Title}>Points</p>
        <p className={classes.Data}>0</p>
      </div>
    </div>
  );
};

export default RoundInfoDisplay;
