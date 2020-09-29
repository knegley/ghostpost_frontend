import React from "react";
import { vote } from "./actions";
import { MessageContext } from "./App";

const VoteButton = ({ id }) => {
  const { dispatch } = React.useContext(MessageContext);
  const postUrl = `http://127.0.0.1:8000/api/posts/${id}/`;
  //   console.log(id);
  //   console.log(message);
  const castVote = (tally) => async (dispatch) => {
    dispatch(vote(tally));
    const d = await fetch(postUrl);
    const response = await d.json();
    console.log(response);
    let time = Date().toLocaleString();
    console.log(time);
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
      console.log(await postData.json());
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
