import React, { useContext } from "react";
import classes from "./RoundInfoDisplay.module.css";
import { AppContext } from "../../../../../context/appContext";

const RoundInfoDisplay: React.FC = () => {
  const { round, points } = useContext(AppContext);
  return (
    <div className={classes.RoundInfoContainer}>
      <div className={classes.RoundContainer}>
        <p className={classes.Title}>Round</p>
        <p className={classes.Data}>{round}/5</p>
      </div>
      <div className={classes.PointsContainer}>
        <p className={classes.Title}>Points</p>
        <p className={classes.Data}>{points}</p>
      </div>
    </div>
  );
};

export default RoundInfoDisplay;
