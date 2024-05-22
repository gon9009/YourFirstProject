import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ScoreContext } from "../context/ScoreContext";
import { useEffect } from "react";
import axios from "axios";

const API_KEY = "AIzaSyAEXJrHsaIKyY5Suc9JlMXHvJuHDNzOPh0";

function ResultPage() {
  const [video, setVideo] = useState([]);
  const navigate = useNavigate();
  const { projectType } = useParams();
  const { score } = useContext(ScoreContext);

  const fetchVideo = async (query) => {
    try {
      const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`);
    } catch (err) {}
  };

  useEffect(() => {}, []);

  const recommendProject = score.find(
    (project) => project.projectType === parseInt(projectType)
  );

  const moveMainPageClick = () => {
    navigate("/");
  };

  return (
    <section className="result-container">
      {/* 결과 타이틀 */}
      <div className="result-title">
        <h1>나의 첫 프로젝트는 ?</h1>
        <div className="project-title-container">
          <h2 className="project-title">
            {recommendProject.name},
            <div className="underline underline-result"></div>
          </h2>
          <p>어떤가요?</p>
        </div>
      </div>
      {/* 유튜브 영상 (API) 활용 */}
      <div className="youtube">유튜브영상</div>
      <button className="btn" onClick={moveMainPageClick}>
        메인페이지로
      </button>
    </section>
  );
}

export default ResultPage;
