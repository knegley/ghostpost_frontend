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
  const roastMessageMatch = useRouteMatch("/roast/");
  const boastMessageMatch = useRouteMatch("/boast/");
  return (
    <MessageContext.Provider value={{ message, dispatch }}>
      <Menu />
      {messageMatch && <Messages />}
      {topMessageMatch && <MessageSort sort={"top"} />}
      {roastMessageMatch && <MessageSort sort={"roast"} />}
      {boastMessageMatch && <MessageSort sort={"boast"} />}
    </MessageContext.Provider>
  );
};

export default App;
