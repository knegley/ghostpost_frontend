import React from "react";
import { initialState, reducer } from "./reducer";
import { useRouteMatch } from "react-router-dom";
import Menu from "./Menu";
import Messages from "./Messages";
import TopMessages from "./TopMessages";

export const MessageContext = React.createContext();

const App = () => {
  const [message, dispatch] = React.useReducer(reducer, initialState);

  const messageMatch = useRouteMatch("");
  const topMessageMatch = useRouteMatch("/top/");
  return (
    <MessageContext.Provider value={{ message, dispatch }}>
      <Menu />
      {messageMatch && <Messages />}
      {topMessageMatch && <TopMessages />}
    </MessageContext.Provider>
  );
};

export default App;
