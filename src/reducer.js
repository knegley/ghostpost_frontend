import { createReducer } from "./helpers";
import { actions } from "./actions";

const initialState = {
  messages: [],
};

const handlers = {};

handlers[actions.MESSAGES] = (state, action) => ({
  ...state,
  messages: action.messages,
});

const reducer = createReducer(initialState, handlers);

export { reducer, handlers, initialState };
