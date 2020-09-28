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
  if (handler) {
    console.log("handler is working");
    return handler(state, action);
  }
  return state;
};

export { createReducer, actionCreator };

// inspired by https://redux.js.org/recipes/reducing-boilerplate/
