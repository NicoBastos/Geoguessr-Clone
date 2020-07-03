import React from "react";
import { AppContext } from "../../../context/appContext";

const GameScreen: React.FC = () => {
  return (
    <AppContext.Consumer>
      {(value) => <p>{value.difficulty}</p>}
    </AppContext.Consumer>
  );
};

export default GameScreen;
