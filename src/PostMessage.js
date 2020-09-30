import React from "react";
import { postData, getMessagesData } from "./helpers";
import { MessageContext } from "./App";

const PostMessage = (props) => {
  const { dispatch } = React.useContext(MessageContext);
  //   console.log(state.messages);
  //   console.log(messages);
  const messagesUrl = "http://127.0.0.1:8000/api/posts/post-list/";
  const postUrl = "http://127.0.0.1:8000/api/posts/post/";

  const handlePost = (post) => {
    console.log(post);
    postData(postUrl, post);
    getMessagesData(messagesUrl)(dispatch);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    let form = event.target;
    let post = {
      message: form.postedMessage.value,
      message_type: form.postType.value,
    };
    // console.log(event.target.postedMessage.value);
    try {
      handlePost(post);
    } catch (error) {
      console.error(error);
    }
    // event.target.postedMessage.value = "";
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="post">Post: </label>
      <textarea
        type="textarea"
        name="postedMessage"
        id="post"
        placeholder="enter post here"
        autoFocus
        required
        maxLength="280"
        spellCheck="true"
      />
      <label htmlFor="messageType">Choose Type</label>
      <select id="messageType" name="postType">
        <option value="B">Boast</option>
        <option value="R">Roast</option>
      </select>
      <input type="submit" value="Post" />
    </form>
  );
};

export default PostMessage;
