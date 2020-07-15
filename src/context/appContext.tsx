import React, { useState } from "react";

type Props = {
  children: any;
};
type ContextProperties = {
  round: number;
  setRound: React.Dispatch<React.SetStateAction<number>>;
  points: number;
  setPoints: React.Dispatch<React.SetStateAction<number>>;
  currentRoundAnswer: {
    lat: number;
    lng: number;
  };
  setCurrentRoundAnswer: React.Dispatch<
    React.SetStateAction<{
      lat: number;
      lng: number;
    }>
  >;
  currentRoundGuess: {
    lat: number;
    lng: number;
  };
  setCurrentRoundGuess: React.Dispatch<
    React.SetStateAction<{
      lat: number;
      lng: number;
    }>
  >;
  difficulty: string | undefined;
  setDifficulty: React.Dispatch<React.SetStateAction<string>>;
  currentRoundFinished: boolean;
  setCurrentRoundFished: React.Dispatch<React.SetStateAction<boolean>>;
  getRandomPosition: () => {
    lat: number;
    lng: number;
  };
  pointsEarned: number;
  setPointsEarned: React.Dispatch<React.SetStateAction<number>>;
  guessDist: number;
  setGuessDist: React.Dispatch<React.SetStateAction<number>>;
};

const coordinateList = [
  [52.321945, -106.584168],
  [52.321945, -106.584168],
  [52.321945, -106.584168],
  [52.321945, -106.584168],
  [52.321945, -106.584168],
  [52.321945, -106.584168],
  [52.321945, -106.584168],
  [52.321945, -106.584168],
  [52.321945, -106.584168],
  [52.321945, -106.584168],
  [52.321945, -106.584168],
  [52.321945, -106.584168],
  [52.321945, -106.584168],
  [52.321945, -106.584168],
  [52.321945, -106.584168],
];

const getRandomPosition = () => {
  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
  const index = getRandomInt(1, Object.keys(coordinateList).length);
  return {
    lat: coordinateList[index][0],
    lng: coordinateList[index][1],
  };
};
const AppContext = React.createContext<Partial<ContextProperties>>({});
const AppContextProvider: React.FC<Props> = (props) => {
  const [points, setPoints] = useState(0);
  const [difficulty, setDifficulty] = useState("");
  const [round, setRound] = useState(1);
  const [currentRoundFinished, setCurrentRoundFished] = useState<boolean>(
    false
  );
  const [currentRoundAnswer, setCurrentRoundAnswer] = useState(
    getRandomPosition()
  );
  const [currentRoundGuess, setCurrentRoundGuess] = useState({
    lat: 0.0,
    lng: 0.0,
  });
  const [pointsEarned, setPointsEarned] = useState(0);
  const [guessDist, setGuessDist] = useState(0);
  return (
    <AppContext.Provider
      value={{
        difficulty,
        setDifficulty,
        round,
        setRound,
        currentRoundAnswer,
        setCurrentRoundAnswer,
        currentRoundGuess,
        setCurrentRoundGuess,
        currentRoundFinished,
        setCurrentRoundFished,
        points,
        setPoints,
        getRandomPosition,
        pointsEarned,
        setPointsEarned,
        guessDist,
        setGuessDist,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
export { AppContext };
