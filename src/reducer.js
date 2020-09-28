import { createReducer } from "./helpers";
import { actions } from "./actions";

const initialState = {
  message: "",
  votes: 0,
  dateCreated: null,
  dateUpdated: null,
};

const handlers = {};
handlers[actions.VOTE] = (state, action) => ({
  ...state,
  votes: state.votes + action.vote,
});

const reducer = createReducer(initialState, handlers);

export { reducer, handlers, initialState };
