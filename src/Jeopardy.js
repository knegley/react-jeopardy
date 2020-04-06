import React from "react";
import { reducer, initialState } from "./reducer";
import { score, addQuestion } from "./actions";

const Jeopardy = () => {
  const [jepData, dispatch] = React.useReducer(reducer, initialState);

  const domain = "https://jservice.kenzie.academy/api";
  //   const [points, setPoints] = React.useState(jepData.score);
  const updateScore = (points) => dispatch(score(points));
  const updateQuestion = (question) => dispatch(addQuestion(question));

  //   React.useEffect(() => {
  //     updateScore(points);
  //   }, [points]);

  // const handleScoreClick = () => {
  //   console.log("clicked");
  //   // setPoints(300);
  //   updateScore(300);
  // };

  const handleNextQuestion = () => {
    console.log("next question fired");
    return async () => {
      const response = await fetch(
        domain + `/clues?offset=${Math.floor(Math.random() * 1000)}`
      );
      const data = (await response.json()).clues[0];
      console.log(data);
      updateQuestion(data);
    };
  };

  // const jepDisplayData =
  //   jepData.question[0] &&
  //   jepData.question.map((value) => (
  //     <React.Fragment key={value.id}>
  //       <div>Score: {value.score}</div>
  //       <div>Category: {value.category.title}</div>
  //       <div>Question: {value.question}</div>
  //       <div>Value: {value.value} </div>
  //     </React.Fragment>
  //   ));

  const validate = (input) => {
    console.log(jepData);
    console.log(input);
    console.log(jepData.questionList);

    let condenser = input
      .toLowerCase()
      .replace(/[^a-zA-Z ]/g, "")
      .split(" ")
      .join("");

    console.log(condenser);
    return condenser;
  };

  const handleScoreClick = (_) => {
    console.log("clicked");
    let input = document.querySelector("#submission").value;

    let value = jepData.question.value;
    console.log(value);

    document.querySelector("#userAnswer").textContent = input;
    document.querySelector("#actualAnswer").textContent =
      jepData.question.answer;
    document.querySelector("#submission").value = "";
    validate(input);

    const isCorrect = validate(input) === validate(jepData.question.answer);
    isCorrect ? updateScore(value) : updateScore(-value);
    handleNextQuestion()();
  };

  return (
    <React.Fragment>
      {console.log(jepData)}
      {/* {jepDisplayData} */}
      <div>Score: {jepData.score}</div>

      {jepData.question.category && (
        <>
          <br />
          <div>Category: {jepData.question.category.title}</div>
          <br />
          <div>Question: {jepData.question.question}</div>
          <br />
          <div>Value: {jepData.question.value} </div>
          <input
            type="text"
            id="submission"
            autoFocus
            placeholder="type answer here"
          />
          <input
            type="button"
            id="submitButton"
            value="Submit"
            onClick={handleScoreClick}
          />
        </>
      )}
      {console.log(jepData.question.answer)}
      <React.Fragment>
        <button onClick={() => handleNextQuestion()()}>Next Question</button>
        <br />
        <div>Your Answer</div>
        <br />
        <div id="userAnswer"></div>
        <br />
        <div>Actual Answer</div>
        <br />
        <div id="actualAnswer" />
      </React.Fragment>
    </React.Fragment>
  );
};

export default Jeopardy;
