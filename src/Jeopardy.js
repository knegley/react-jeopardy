import React from "react";
import { reducer, initialState } from "./reducer";
import { score } from "./actions";

const Jeopardy = () => {
  const [jepData, dispatch] = React.useReducer(reducer, initialState);

  const questionURL = "https://jservice.kenzie.academy";
  //   const [points, setPoints] = React.useState(jepData.score);
  const updateScore = (points) => dispatch(score(points));

  //   React.useEffect(() => {
  //     updateScore(points);
  //   }, [points]);

  const handleScoreClick = () => {
    console.log("clicked");
    // setPoints(300);
    updateScore(300);
  };

  const handleNextQuestion = () => {
    console.log("next question fired");
  };

  const fetchRandomQuestion = async () => {
    const response = await fetch();
  };

  return (
    <div>
      Score: {jepData.score} Question: {jepData.question}
      <button onClick={handleScoreClick}>Submit Answer</button>
      <button onClick={handleNextQuestion}>Next Question</button>
    </div>
  );
};

export default Jeopardy;
