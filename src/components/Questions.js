import React, { useContext, useState } from "react";
import Progbar from "./Progbar";
import QnA from "../data/QnA";
import { useNavigate } from "react-router-dom";
import { ScoreContext } from "../context/ScoreContext";
import QuestionCard from "./QuestionCard";
import AnswerButton from "./AnswerButton";
import findHighestScore from "./utils/FindHighestScore";
import scoreUpdate from "./utils/ScoreUpdate";

function Questions() {
  const [index, setIndex] = useState(0);
  const { score, setScore } = useContext(ScoreContext);
  const { questionNum, question, answer1, answer2 } = QnA[index];
  const navigate = useNavigate();

  const handleClick = (answer) => {
    scoreUpdate(answer, score, setScore);
    handleNextQuestion();
  };

  //다음 컴포넌트로 이동
  const handleNextQuestion = () => {
    if (index === QnA.length - 1) {
      const projectType = findHighestScore(score).projectType;
      navigate(`/result/${projectType}`);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <section className="questions-container">
      <Progbar index={index} />
      <QuestionCard questionNum={questionNum} question={question} />
      <AnswerButton
        answer1={answer1}
        answer2={answer2}
        handleClick={handleClick}
      />
    </section>
  );
}

export default Questions;
