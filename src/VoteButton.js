import React from "react";
import { castVote } from "./helpers";
import { MessageContext } from "./App";

const VoteButton = ({ id }) => {
  const { message, dispatch } = React.useContext(MessageContext);
  const postUrl = `http://127.0.0.1:8000/api/posts/${id}/`;

  const vote = castVote(postUrl, message, dispatch);

  return (
    <React.Fragment>
      <input type="button" onClick={() => vote(1)} value="Vote Up" />
      <input type="button" onClick={() => vote(-1)} value="Vote Down" />
    </React.Fragment>
  );
};

export default VoteButton;
