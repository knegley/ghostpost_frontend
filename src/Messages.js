import React from "react";
import { MessageContext } from "./App";
import VoteButton from "./VoteButton";
import { getMessageData } from "./helpers";
import PostMessage from "./PostMessage";

const Messages = (props) => {
  const { message, dispatch } = React.useContext(MessageContext);
  const postUrl = "http://127.0.0.1:8000/api/posts/post-list/";

  React.useEffect(() => {
    getMessageData(postUrl, dispatch);
  }, [dispatch]);

  // console.log(message.messages);
  const messageBoard = message.messages.map((m) => (
    <ul key={m.id}>
      <li>Message: {m.message}</li>
      <li>Last Updated: {m.last_updated}</li>
      <li>Date Created: {m.date_created}</li>
      <li>Type: {m.message_type}</li>
      <li>Total Votes: {m.vote_total}</li>
      <VoteButton id={m.id} />
    </ul>
  ));

  return (
    <React.Fragment>
      <h1>Messages</h1>
      <PostMessage />
      {messageBoard}
    </React.Fragment>
  );
};

export default Messages;
