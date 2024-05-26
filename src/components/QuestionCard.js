import React from "react";

function QuestionCard({ questionNum, question }) {
  return (
    <div className="question-card">
      <div className="question-number">
        <p>{questionNum}</p>
        <div className="underline underline-question"></div>
      </div>
      <p className="question-text">{question}</p>
    </div>
  );
}

export default QuestionCard;
