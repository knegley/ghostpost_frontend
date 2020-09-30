import React from "react";
import { MessageContext } from "./App";
import { messages } from "./actions";

const TopMessages = (props) => {
  const { topMessages, dispatch } = React.useContext(MessageContext);
  const messageUrl = "http://127.0.0.1:8000/api/posts/top/";

  const receiveList = (list) => (dispatch) => dispatch(messages(list));

  React.useEffect(() => {
    (async () => {
      const response = await fetch(messageUrl);
      const data = await response.json();
      // console.log(data);
      receiveList(data)(dispatch);
    })();
  }, [dispatch]);

  console.log(topMessages);

  return <React.Fragment></React.Fragment>;
};

export default TopMessages;
