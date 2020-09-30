import { receiveList } from "./actions";

const actionCreator = (type, ...payloadNames) => (...args) => {
  const action = { type };
  payloadNames.forEach((_, index) => {
    action[payloadNames[index]] = args[index];
  });
  return action;
};

const createReducer = (initialState, handlers) => (
  state = initialState,
  action
) => {
  const handler = handlers[action.type];

  return handler ? handler(state, action) : state;
};

const postData = async (postUrl, data) => {
  console.log(data);
  try {
    const response = await fetch(postUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    console.log(await response.json());
  } catch (error) {
    console.error(error);
  }
};

const getMessageDate = (url) => async (dispatch) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    dispatch(receiveList(data));
  } catch (error) {
    console.error(error);
  }
};

export { createReducer, actionCreator, postData, getMessagesData };

// inspired by https://redux.js.org/recipes/reducing-boilerplate/
