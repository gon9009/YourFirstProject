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
    // 3.다음 질문으로 이동
    handleNextQuestion();
  };

  //4.스코어가 가장 높은 프로젝트 찾기/ 공동1등일 경우 랜덤으로
  const findHighestScore = () => {
    const sortedProjects = [...score].sort((a, b) => b.score - a.score);
    console.log(score);

    // 가장 높은 점수를 가진 프로젝트 찾기
    const highScore = sortedProjects[0].score;

    const highScoreProjects = sortedProjects.filter(
      (project) => project.score === highScore
    );

    if (highScoreProjects.length > 1) {
      const randomIndex = Math.floor(Math.random() * highScoreProjects.length);
      console.log("공동 1등이 있을때:");
      console.log(highScoreProjects);
      return highScoreProjects[randomIndex];
    } else {
      console.log("공동 1등이 없을때:");
      console.log(highScoreProjects);
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
