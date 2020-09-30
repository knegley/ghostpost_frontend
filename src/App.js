import React from "react";
import { initialState, reducer } from "./reducer";
import { useRouteMatch } from "react-router-dom";
import Menu from "./Menu";
import Messages from "./Messages";
import MessageSort from "./MessageSort";

export const MessageContext = React.createContext();

const App = () => {
  const [message, dispatch] = React.useReducer(reducer, initialState);

  const messageMatch = useRouteMatch({ path: "", exact: true });
  const topMessageMatch = useRouteMatch("/top/");
  const roastMessageMatch = useRouteMatch("/roasts/");
  const boastMessageMatch = useRouteMatch("/boasts/");
  return (
    <MessageContext.Provider value={{ message, dispatch }}>
      <Menu />
      {messageMatch && <Messages />}
      {topMessageMatch && <MessageSort sort={"top"} />}
      {roastMessageMatch && <MessageSort sort={"roasts"} />}
      {boastMessageMatch && <MessageSort sort={"boasts"} />}
    </MessageContext.Provider>
  );
};

export default App;
