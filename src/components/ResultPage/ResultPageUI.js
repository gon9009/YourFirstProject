import React from "react";
import RecommendVideo from "./RecommendVideo";
import './ResultPageUI.scss';

function ResultPageUI({ recommendProject, moveMainPage }) {
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

      {/* 유튜브 영상자료 */}
      <RecommendVideo recommendProject={recommendProject} />

      {/* 메인페이지 이동 */}
      <button
        className="btn"
        onClick={moveMainPage}
        aria-label="메인페이지 이동"
      >
        메인페이지로
      </button>
    </section>
  );
}

export default ResultPageUI;
