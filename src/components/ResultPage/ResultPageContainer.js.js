import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ScoreContext } from "../../context/ScoreContext";
import ResultPage from "./ResultPage";

function ResultPageContainer() {
  const navigate = useNavigate();
  const { projectType } = useParams();
  const { score, resetScore } = useContext(ScoreContext);

  const recommendProject = score.find(
    (project) => project.projectType === parseInt(projectType)
  );

  // 메인페이지 이동
  const moveMainPage = () => {
    resetScore();
    navigate("/");
  };

  return (
    <ResultPage
      recommendProject={recommendProject}
      moveMainPage={moveMainPage}
    />
  );
}

export default ResultPageContainer;
