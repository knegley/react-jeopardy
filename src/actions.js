import { actionCreator } from "./helpers";

const actions = {
  SCORE: "SCORE",
  QUESTION: "QUESTION",
};

const score = actionCreator(actions.SCORE, "score");
const addQuestion = actionCreator(actions.QUESTION, "question");

export { actions, score, addQuestion };
