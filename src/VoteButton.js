import React from "react";
import { messages } from "./actions";
import { MessageContext } from "./App";

const VoteButton = ({ id }) => {
  const { message, dispatch } = React.useContext(MessageContext);
  const postUrl = `http://127.0.0.1:8000/api/posts/${id}/`;
  //   console.log(id);
  //   console.log(message);

  // console.log(message.messages.filter(({ i }) => i == id));

  const receiveList = (list) => dispatch(messages(list));

  const castVote = (tally) => async (dispatch) => {
    const d = await fetch(postUrl);
    const response = await d.json();
    console.log(response);

    // dispatch(vote(tally, response.id));
    let time = Date().toLocaleString();
    // console.log(time);
    let data =
      tally > 0
        ? { up_votes: response["up_votes"] + 1 }
        : { down_votes: response["down_votes"] - 1 };
    let test = { ...response, last_updated: time, ...data };
    console.log(test);
    // console.log(data);
    try {
      const postData = await fetch(postUrl, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(test),
      });
      let postDataResponse = await postData.json();
      console.log(postDataResponse);
      let msgs = message.messages.filter(({ id }) => id !== response.id);
      msgs = [...msgs, postDataResponse].sort(
        (a, b) => b.vote_total - a.vote_total
      );
      console.log(msgs);
      receiveList(msgs);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <React.Fragment>
      <input
        type="button"
        onClick={() => castVote(1)(dispatch)}
        value="Vote Up"
      />
      <input
        type="button"
        onClick={() => castVote(-1)(dispatch)}
        value="Vote Down"
      />
    </React.Fragment>
  );
};

export default VoteButton;
