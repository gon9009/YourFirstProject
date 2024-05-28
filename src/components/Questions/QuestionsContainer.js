import React, { useContext, useState } from "react";
import QnA from "../../data/QnA";
import { useNavigate } from "react-router-dom";
import { ScoreContext } from "../../context/ScoreContext";
import findHighestScore from "../utils/findHighestScore";
import scoreUpdate from "../utils/scoreUpdate";
import QuestionsUI from "./QuestionsUI";

function QuestionsContainer() {
  const [index, setIndex] = useState(0);
  const { score, setScore } = useContext(ScoreContext);
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

  return <QuestionsUI index={index} handleClick={handleClick} />;
}

export default QuestionsContainer;
