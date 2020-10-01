import { messages } from "./actions";

const createReducer = (initialState, handlers) => (
  state = initialState,
  action
) => {
  const handler = handlers[action.type];

  return handler ? handler(state, action) : state;
};

const receiveList = (list) => (dispatch) => dispatch(messages(list));

const postData = async (postUrl, data) => {
  // console.log(data);
  try {
    const response = await fetch(postUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

const getMessageData = (url, dispatch) =>
  (async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      // console.log("working");
      receiveList(data)(dispatch);
    } catch (error) {
      console.error(error);
    }
  })();

const castVote = (postUrl, message, dispatch) => async (tally) => {
  const d = await fetch(postUrl);
  const response = await d.json();
  // console.log(response);

  let time = Date().toLocaleString();
  // console.log(time);
  let data =
    tally > 0
      ? { up_votes: response["up_votes"] + 1 }
      : { down_votes: response["down_votes"] - 1 };
  let post = { ...response, last_updated: time, ...data };
  // console.log(test);
  // console.log(data);
  try {
    const postData = await fetch(postUrl, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });
    let postDataResponse = await postData.json();
    // console.log(postDataResponse);
    let msgs = message.messages.filter(({ id }) => id !== response.id);
    msgs = [...msgs, postDataResponse].sort((a, b) => {
      let dateA = new Date(a.date_created);
      let dateB = new Date(b.date_created);
      return dateB - dateA;
    });
    // console.log(msgs);
    receiveList(msgs)(dispatch);
  } catch (error) {
    console.error(error);
  }
};

export { createReducer, postData, getMessageData, receiveList, castVote };

// inspired by https://redux.js.org/recipes/reducing-boilerplate/
