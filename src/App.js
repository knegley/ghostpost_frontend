import React from "react";
import { initialState, reducer } from "./reducer";
import { useRouteMatch } from "react-router-dom";
import Menu from "./Menu";
import Messages from "./Messages";

export const MessageContext = React.createContext();

const App = () => {
  const [message, dispatch] = React.useReducer(reducer, initialState);

  const messageMatch = useRouteMatch("");

  return (
    <MessageContext.Provider value={{ message, dispatch }}>
      <Menu />
      {messageMatch && <Messages />}
    </MessageContext.Provider>
  );
};

export default App;
