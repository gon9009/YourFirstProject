import React, { useContext, useState } from "react";
import Progbar from "./Progbar";
import QnA from "../data/QnA";
import { useNavigate } from "react-router-dom";
import { ScoreContext } from "../context/ScoreContext";

function Questions() {
  const [index, setIndex] = useState(0);
  const { score, setScore } = useContext(ScoreContext);
  const navigate = useNavigate();
  const { questionNum, question, answer1, answer2 } = QnA[index];

  const handleClick = (answer) => {
    // 인자로 받은 프로젝트를 찾고
    const selectedProject = score.find(
      (project) => project.name === answer.project
    );

    // 데이터를 업데이트 시킨다
    if (selectedProject) {
      const updatedScore = score.map((project) => {
        if (project.name === selectedProject.name) {
          return { ...project, score: project.score + 1 };
        }
        return project;
      });
      setScore(updatedScore);
    }
    handleNextQuestion();
  };

  const findHighestScore = () => {
    const sortedProjects = [...score].sort((a, b) => b.score - a.score);
    return sortedProjects[0];
  };

  const handleNextQuestion = () => {
    if (index === QnA.length - 1) {
      const projectType = findHighestScore().projectType;
      console.log(`프로젝트 타입(Question 컴포넌트) : ${projectType}`);
      navigate(`/result/${projectType}`);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <section className="questions-container">
      <Progbar index={index} />
      <div className="question-card">
        <div className="question-number">
          <p>{questionNum}</p>
          <div className="underline underline-question"></div>
        </div>
        <p className="question-text">{question}</p>
      </div>
      <div className="btn-answer-container">
        <button className="btn btn-answer" onClick={() => handleClick(answer1)}>
          {answer1.text}
        </button>
        <button className="btn btn-answer" onClick={() => handleClick(answer2)}>
          {answer2.text}
        </button>
      </div>
    </section>
  );
}

export default Questions;
