import React, { useState } from "react";

type Props = {
  children: any;
};
type ContextProperties = {
  settings: string;
  setSettings: React.Dispatch<React.SetStateAction<string>>;
};
const AppContext = React.createContext<Partial<ContextProperties>>({
  settings: "",
});
const AppContextProvider: React.FC<Props> = (props) => {
  const [settings, setSettings] = useState<string>("");
  return (
    <AppContext.Provider value={{ settings, setSettings }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
export { AppContext };
