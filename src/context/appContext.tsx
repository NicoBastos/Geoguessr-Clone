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
  [34.448715, -106.349093],
  [40.704919, -73.863833],
  [19.272238, -99.129768],
  [9.034096, -79.616542],
  [5.015219, -74.348039],
  [4.065262, -73.011297],
  [-12.153372, -76.973771],
  [-16.39339, -71.570031],
  [-31.432391, -64.270932],
  [-23.587288, -46.619191],
  [-22.952026, -43.211411],
  [40.414545, -3.694377],
  [40.451883, -3.686835],
  [48.843056, 2.326603],
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
