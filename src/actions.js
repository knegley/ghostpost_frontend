import { actionCreator } from "./helpers";

const actions = {
  VOTE: "VOTE",
};

const vote = actionCreator(actions.VOTE, "vote");

export { actions, vote };
