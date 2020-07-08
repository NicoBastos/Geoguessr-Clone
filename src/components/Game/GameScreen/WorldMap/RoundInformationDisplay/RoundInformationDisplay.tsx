import React from "react";
import classes from "./RoundInformationDisplay.module.css";

const RoundInformationDisplay: React.FC = () => {
  return (
    <div className={classes.RoundInfoContainer}>
      <div className={classes.RoundContainer}>
        <p>Round</p>
        <p>0/5</p>
      </div>
      <div className={classes.PointsContainer}>
        <p>Points</p>
        <p>4566</p>
      </div>
    </div>
  );
};

export default RoundInformationDisplay;
