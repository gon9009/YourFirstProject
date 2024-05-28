import React from "react";
import { faCheck, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import ThinkingEmoji from "../../assets/ThinkingEmoji.gif";
import { Link } from "react-router-dom";
import DescriptionIcon from "./DescriptionIcon";

function MainPage() {
  return (
    <>
      {/* 설명 영역 */}
      <section className="desc-container">
        <DescriptionIcon
          icon={faThumbsUp}
          text="나에게 알맞는"
          text2="첫 프로젝트!"
        />
        <DescriptionIcon icon={faCheck} text="질문은 총 10개!" />
        <DescriptionIcon
          icon={faQuestion}
          text="뭘 만들지"
          text2="고민하시나요?"
        />
      </section>

      {/* 타이틀 영역 */}
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

      {/* 이미지 영역 */}
      <section className="emoji-container">
        <img src={ThinkingEmoji} alt="Thinking Emoji" />
      </section>

      {/* 버튼 영역 */}
      <section className="btn-container">
        <Link to="/questions" className="btn-link">
          <button className="btn">시작하기</button>
        </Link>
      </section>
    </>
  );
}

export default MainPage;
