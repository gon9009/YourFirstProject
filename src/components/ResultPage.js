import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ScoreContext } from "../context/ScoreContext";
import RecommendVideo from "./RecommendVideo";

function ResultPage() {
  const navigate = useNavigate();
  const { projectType } = useParams();
  const { score, resetScore } = useContext(ScoreContext);

  const recommendProject = score.find(
    (project) => project.projectType === parseInt(projectType)
  );

  const moveMainPage = () => {
    resetScore();
    navigate("/");
  };

  return (
    <section className="result-container">
      {/* 결과 타이틀 */}
      <div className="result-title-container">
        <h1 className="result-title">
          나의
          <div className="result-title-highlight">
            첫 <div className="underline underline-result"></div>
          </div>
          프로젝트는?
        </h1>
      </div>

      {/* 프로잭트 추천 */}
      <div className="project-recommendation">
        <h2>{recommendProject.name}</h2>
        <p>어떤가요?</p>
      </div>
      <RecommendVideo recommendProject={recommendProject} />

      {/* 메인페이지 이동 */}
      <button className="btn" onClick={moveMainPage}>
        메인페이지로
      </button>
    </section>
  );
}

export default ResultPage;
