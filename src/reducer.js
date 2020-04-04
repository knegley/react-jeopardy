import { createReducer } from "./helpers";
import { actions } from "./actions";

export const initialState = {
  question: "",
  answer: "",
  category: "",
  value: 0,
  score: 0,
};

const handlers = {};

handlers[actions.SCORE] = (state, action) => {
  return { ...state, score: state.score + action.score };
};
handlers[actions.QUESTION] = (state, action) => {
  return { ...state, question: action.question };
};

const reducer = createReducer(initialState, handlers);

export { reducer, handlers };
