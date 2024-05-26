import React from "react";

function AnswerButton({ answer1, answer2,handleClick }) {
  return (
    <div className="btn-answer-container">
      <button className="btn btn-answer" onClick={() => handleClick(answer1)}>
        {answer1.text}
      </button>
      <button className="btn btn-answer" onClick={() => handleClick(answer2)}>
        {answer2.text}
      </button>
    </div>
  );
}

export default AnswerButton;
