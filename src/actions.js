import { actionCreator } from "./helpers";

const actions = {
  VOTE: "VOTE",
  MESSAGES: "MESSAGES",
};

const vote = actionCreator(actions.VOTE, "vote");
const messages = actionCreator(actions.MESSAGES, "messages");
export { actions, vote, messages };
