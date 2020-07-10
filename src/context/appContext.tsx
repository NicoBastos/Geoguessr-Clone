import React, { useState } from "react";

type Props = {
  children: any;
};
type ContextProperties = {
  difficulty: string;
  setDifficulty: React.Dispatch<React.SetStateAction<string>>;
};
const AppContext = React.createContext<Partial<ContextProperties>>({
  difficulty: "",
});
const AppContextProvider: React.FC<Props> = (props) => {
  const [difficulty, setDifficulty] = useState<string>("");
  return (
    <AppContext.Provider value={{ difficulty, setDifficulty }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
export { AppContext };
