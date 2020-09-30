import React from "react";
import { MessageContext } from "./App";
import VoteButton from "./VoteButton";
import { messages } from "./actions";

const Messages = (props) => {
  const { message, dispatch } = React.useContext(MessageContext);
  const postUrl = "http://127.0.0.1:8000/api/posts/post-list/";

  const receiveList = (list) => (dispatch) => dispatch(messages(list));

  React.useEffect(() => {
    (async () => {
      const response = await fetch(postUrl);
      const data = await response.json();
      // console.log(data);
      receiveList(data)(dispatch);
    })();
  }, [dispatch]);

  console.log(message.messages);
  const messageBoard = message.messages.map((m) => (
    <ul key={m.id}>
      <li>Message: {m.message}</li>
      <li>Last Updated: {m.last_updated}</li>
      <li>Date Created: {m.date_created}</li>
      <li>Total Votes: {m.vote_total}</li>
      <VoteButton id={m.id} />
    </ul>
  ));

  return (
    <React.Fragment>
      <h1>Messages</h1>
      {messageBoard}
    </React.Fragment>
  );
};

export default Messages;
