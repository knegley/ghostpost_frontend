const actionCreator = (type, ...payloadNames) => (...args) => {
  const action = { type };
  payloadNames.forEach((_, index) => {
    action[payloadNames[index]] = args[index];
  });
  return action;
};

const actions = {
  VOTE: "VOTE",
  MESSAGES: "MESSAGES",
};

const vote = actionCreator(actions.VOTE, "vote", "id");
const messages = actionCreator(actions.MESSAGES, "messages");

export { actions, vote, messages };
