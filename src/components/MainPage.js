import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import ThinkingEmoji from "../assets/ThinkingEmoji.gif";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <>
    {/* 설명 영역  */}
      <section className="desc-container">
        <div className="desc">
          <div className="icon-container">
            <FontAwesomeIcon icon={faThumbsUp} size="xl" className="icon" />
          </div>
          <p>
            나에게 알맞는
            <br />첫 프로젝트!
          </p>
        </div>

        <div className="desc">
          <div className="icon-container">
            <FontAwesomeIcon icon={faCheck} size="xl" className="icon" />
          </div>
          <p>질문은 총 10개!</p>
        </div>

        <div className="desc">
          <div className="icon-container">
            <FontAwesomeIcon icon={faQuestion} size="xl" className="icon" />
          </div>
          <p>
            뭘 만들지
            <br />
            고민하시나요?
          </p>
        </div>
      </section>

      <section className="title-container">
        <h1 className="test-intro-title">YourFirstProject</h1>
        <div className="underline"></div>
        <div className="title-start">
          <p>
            <strong>첫 프로젝트</strong>, 뭘로 만들까?
          </p>
          <span>나에게 알맞는 프로젝트로!</span>
        </div>
      </section>

      <section className="emoji-container">
        <img src={ThinkingEmoji} alt="Thinking Emoji" />
      </section>

      <section className="btn-container">
        <Link to="/username">
          <button className="btn-start">시작하기</button>
        </Link>
      </section>
    </>
  );
}

export default MainPage;