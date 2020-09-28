import React from "react";
import { vote } from "./actions";
import { MessageContext } from "./App";

const Messages = (props) => {
  const { message, dispatch } = React.useContext(MessageContext);
  console.log(message);
  console.log(vote(2));
  //   console.log(vote(2));
  //   console.log(dispatch(vote(2)));
  //   console.log(dispatch(vote()));

  return <h1>Messages Test</h1>;
};

export default Messages;
