import React, { useContext, useState } from "react";
import Progbar from "./Progbar";
import QnA from "../data/QnA";
import { useNavigate } from "react-router-dom";
import { ScoreContext } from "../context/ScoreContext";
import QuestionCard from "./QuestionCard";
import AnswerButton from "./AnswerButton";
import ScoreUpdate from "./ScoreUpdate";

function Questions() {
  const [index, setIndex] = useState(0);
  const { score } = useContext(ScoreContext);
  const { questionNum, question, answer1, answer2 } = QnA[index];
  const navigate = useNavigate();

  const handleClick = (answer) => {
    ScoreUpdate(answer);
    handleNextQuestion();
  };



  //가장 점수가 높은 프로젝트 찾기
  const findHighestScore = () => {
    const highScore = Math.max(...score.map((project => project.score)))
    const highScoreProjects = score.filter(
      (project) => project.score === highScore
    );
    if (highScoreProjects.length > 1) {
      const randomIndex = Math.floor(Math.random() * highScoreProjects.length);
      return highScoreProjects[randomIndex];
    } else {
      return highScoreProjects[0];
    }
  };

  //5.다음 컴포넌트로 이동
  const handleNextQuestion = () => {
    if (index === QnA.length - 1) {
      const projectType = findHighestScore().projectType;
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
