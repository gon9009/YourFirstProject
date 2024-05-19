import React, { useState } from "react";
import Progbar from "./Progbar";
import QnA from "../data/QnA";
import ResultPage from "./ResultPage"
import { useNavigate } from "react-router-dom";

// 인덱스를 활용하여 현재 선택된 요소만
function Questions() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const { questionNum, question, answer1, answer2 } = QnA[index];

// 마지막 인덱스에서 버튼을 누르면 -> 결과페이지 이동
const handleNextQuestion = () => {
  if (index === QnA.length - 1) {
    navigate("/result"); // 결과 페이지로 라우팅
  } else {
    setIndex(index + 1);
  }
};


  return (
    <section className="questions-container">
      <Progbar index={index} />
      <div className="question-card">
        <p className="question-number">{questionNum}.</p>
        <h2 className="question-text">{question}</h2>
      </div>
      <section className="btn-answer-container">
        <button className="btn btn-answer" onClick={handleNextQuestion}>
          {answer1}
        </button>
        <button className="btn btn-answer" onClick={handleNextQuestion}>
          {answer2}
        </button>
      </section>
    </section>
  );
}

export default Questions;
