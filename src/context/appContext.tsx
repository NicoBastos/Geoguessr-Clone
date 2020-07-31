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
  totalPoints: number;
  setTotalPoints: React.Dispatch<React.SetStateAction<number>>;
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
  [37.7872983, -122.3908193],
  [39.7551964, -123.4982388],
  [38.152453, -77.5460349],
  [48.1648348, 14.0425481],
  [50.0713968, 14.4375925],
  [18.2328415, 75.6674464],
  [31.3177013, 35.3533128],
  [39.6466729, 22.3993772],
  [33.5934578, -7.6008868],
  [36.0152104, -5.6026929],
  [38.7878388, -9.1418248],
  [43.3762788, -5.8523135],
  [48.9842324, 3.2297539],
  [49.3842418, 0.2758125],
  [51.5032034, -0.1200113],
  [53.3727369, -6.4509245],
  [59.9245361, 10.7532326],
  [35.7078871, 139.7513277],
  [35.2677524, 136.9908446],
  [39.8044431, 32.9860718],
  [42.4949761, 23.8800257],
  [41.899714, 12.4655644],
  [43.7839204, 11.1543524],
  [47.122719, 7.6017266],
  [11.9359436, -72.4144262],
  [15.1713181, -90.8961564],
  [30.2486284, -97.7679958],
  [30.4929717, -98.1043971],
  [32.7155477, -97.3692367],
  [39.6048262, -105.0605754],
  [43.5104019, -112.1012471],
  [49.927671, -96.8556825],
  [64.1453831, -21.8214687],
  [64.7994645, -22.9116033],
  [-26.1715046, 27.9699838],
  [-26.0962106, 26.1161447],
  [40.488329, -3.8813],
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
