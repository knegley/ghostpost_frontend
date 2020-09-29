import React from "react";
import { MessageContext } from "./App";
import VoteButton from "./VoteButton";
// import { messages } from "./actions";

const Messages = (props) => {
  const { message, dispatch } = React.useContext(MessageContext);
  // const postUrl = "http://127.0.0.1:8000/api/posts/post-list/";

  // const receiveList = (list) => (dispatch) => dispatch(messages(list));

  // React.useEffect(
  //   (async () => {
  //     const response = await fetch(postUrl);
  //     const data = await response.json();
  //     receiveList(data)(dispatch);
  //   })(),
  //   [dispatch]
  // );

  console.log(message);
  // console.log(vote);
  // console.log(vote(2));
  // console.log(dispatch(vote(2)));
  //   console.log(vote(2));
  //   console.log(dispatch(vote(2)));
  //   console.log(dispatch(vote()));

  return (
    <React.Fragment>
      <h1>Messages</h1>
      <VoteButton id={4} />
    </React.Fragment>
  );
};

export default Messages;
