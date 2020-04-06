import { createReducer } from "./helpers";
import { actions } from "./actions";

export const initialState = {
  question: {
    value: 0,
    question: "",
    answer: "",
  },
  score: 0,
};

const handlers = {};

handlers[actions.SCORE] = (state, action) => {
  return { ...state, score: state.score + action.score };
};
handlers[actions.QUESTION] = (state, action) => {
  return {
    ...state,
    question: { ...state.question, ...action.question },
  };
};

const reducer = createReducer(initialState, handlers);

export { reducer, handlers };
