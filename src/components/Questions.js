import React, { useContext, useState } from "react";
import Progbar from "./Progbar";
import QnA from "../data/QnA";
import { useNavigate } from "react-router-dom";
import { ScoreContext } from "../context/ScoreContext";
import QuestionCard from "./QuestionCard";
import AnswerButton from "./AnswerButton";

function Questions() {
  const [index, setIndex] = useState(0);
  const { score, setScore } = useContext(ScoreContext);
  const { questionNum, question, answer1, answer2 } = QnA[index];
  const navigate = useNavigate();

  const handleClick = (answer) => {
    // 1.선택한 프로젝트 찾기
    const selectedProject = score.find(
      (project) => project.name === answer.project
    );
    if (selectedProject) {
      const updatedScore = score.map((project) => {
        if (project.name === selectedProject.name) {
          if (project.name === "영화 추천 앱") {
            return { ...project, score: project.score + 1.5 };
          }
          return { ...project, score: project.score + 1 };
        }
        return project;
      });
      setScore(updatedScore);
    }
    handleNextQuestion();
  };

  //4.스코어가 가장 높은 프로젝트 찾기/ 공동1등일 경우 랜덤으로
  const findHighestScore = () => {
    const sortedProjects = [...score].sort((a, b) => b.score - a.score);
    // 가장 높은 점수를 가진 프로젝트 찾기
    const highScore = sortedProjects[0].score;
    const highScoreProjects = sortedProjects.filter(
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
