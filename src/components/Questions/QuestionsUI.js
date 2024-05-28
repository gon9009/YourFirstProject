import React from "react";
import Progbar from './Progbar'
import QuestionCard from './QuestionCard'
import AnswerButton from './AnswerButton'
import QnA from '../../data/QnA'


function QuestionsUI({index,handleClick}) {
    const { questionNum, question, answer1, answer2 } = QnA[index];

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

export default QuestionsUI;
