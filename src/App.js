import React from "react";
import Jeopardy from "./Jeopardy";

function App() {
  // let initialState = {
  //   question: "",
  //   answer: "",
  //   category: "",
  //   value: 0,
  //   score: 0,
  // };

  // const actions = {
  //   SCORE: "SCORE",
  //   QUESTION: "QUESTION",
  // };

  // const actionCreator = (type, ...payloadNames) => (...args) => {
  //   const action = { type };
  //   payloadNames.forEach((_, index) => {
  //     action[payloadNames[index]] = args[index];
  //   });
  //   return action;
  // };

  // const score = actionCreator(actions.SCORE, "score");
  // const addQuestion = actionCreator(actions.QUESTION, "question");

  // console.log(score(20));
  // console.log(addQuestion("hello"));

  // const handlers = {};

  // const receivePayload = (stateKey) => (state, action) => {
  //   return { ...state, [stateKey]: state[stateKey] + action.payload };
  // };

  // handlers[actions.SCORE] = (state, action) => {
  //   return { ...state, score: state.score + action.score };
  // };
  // handlers[actions.QUESTION] = (state, action) => {
  //   return { ...state, question: action.question };
  // };

  // const createReducer = (initialState, handlers) => (
  //   state = initialState,
  //   action
  // ) => {
  //   const handler = handlers[action.type];
  //   if (handler) {
  //     console.log("handler is working");
  //     return handler(state, action);
  //   }
  //   return state;
  // };

  // const reducer = createReducer(initialState, handlers);

  // const [state, dispatch] = React.useReducer(reducer, initialState);

  // const updateScore = () => (dispatch, points) => dispatch(score(points));

  return <Jeopardy />;
}

export default App;
