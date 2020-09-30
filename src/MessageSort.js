import React from "react";
import { MessageContext } from "./App";
import { messages } from "./actions";

const MessageSort = ({ sort }) => {
  const { message, dispatch } = React.useContext(MessageContext);
  const messageUrl = `http://127.0.0.1:8000/api/posts/${sort}/`;

  const receiveList = (list) => (dispatch) => dispatch(messages(list));

  React.useEffect(() => {
    (async () => {
      const response = await fetch(messageUrl);
      const data = await response.json();
      // console.log(data);
      receiveList(data)(dispatch);
    })();
  }, [dispatch]);

  const messageBoard = message.messages.map((m) => (
    <ul key={m.id}>
      <li>Message: {m.message}</li>
      <li>Last Updated: {m.last_updated}</li>
      <li>Date Created: {m.date_created}</li>
      <li>Total Votes: {m.vote_total}</li>
    </ul>
  ));

  return (
    <React.Fragment>
      <h1>Top Messages</h1>
      {messageBoard}
    </React.Fragment>
  );
};

export default MessageSort;
