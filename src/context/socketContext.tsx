import React from "react";
import io from "socket.io-client";
type Props = {
  children: any;
};
type ContextProperties = {
  socket: SocketIOClient.Socket;
  handleStart: () => void;
};

const socketContext = React.createContext<Partial<ContextProperties>>({});
const socketContextProvider: React.FC<Props> = (props) => {
  const handleStart = () => {
    socket.emit("createRoom", { name: "nick", roomID: Date.now() });
  };
  const socket = io.connect("http://localhost:5000");
  return (
    <socketContext.Provider value={{ socket, handleStart }}>
      {props.children}
    </socketContext.Provider>
  );
};

export default socketContextProvider;
export { socketContext };
