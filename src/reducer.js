import { createReducer } from "./helpers";
import { actions } from "./actions";

const initialState = {
  messages: null,
  votes: 0,
  dateCreated: null,
  dateUpdated: null,
};

const handlers = {};
handlers[actions.VOTE] = (state, action) => ({
  ...state,
  votes: state.votes + action.vote,
});

handlers[actions.MESSAGES] = (state, action) => ({
  ...state,
  messages: action.messages,
});

const reducer = createReducer(initialState, handlers);

export { reducer, handlers, initialState };
