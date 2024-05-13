import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faCheck,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons"; // 폰트 어썸에서 사용할 아이콘을 가져옵니다.

import ThinkingEmoji from "./assets/ThinkingEmoji.gif";

function App() {
  return (
    <div className="wrapper">
      <main className="main-container">
        <div className="desc-container">
          <div className="desc">
            <div className="icon-container">
              <FontAwesomeIcon icon={faThumbsUp} size="xl" />
            </div>
            <p>
              나에게 알맞는
              <br />첫 프로젝트!
            </p>
          </div>

          <div className="desc">
            <div className="icon-container">
              {/* xl */}
              <FontAwesomeIcon icon={faCheck} size="xl" />
            </div>
            <p>질문은 총 10개!</p>
          </div>

          <div className="desc">
            <div className="icon-container">
              {/* xl */}
              <FontAwesomeIcon icon={faQuestion} size="xl" />
            </div>
            <p>
              뭘 만들지
              <br />
              고민하시나요?
            </p>
          </div>
        </div>

        <section className="title-container">
          <h1 className="game-intro-title">YourFirstProject</h1>
          <div className="underline"></div>

          <div className="title-start">
            <p>
              <strong>첫 프로젝트</strong>, 뭘로 만들까?
            </p>
            <span>나에게 알맞는 프로젝트로!</span>
          </div>
        </section>

        <div className="emoji-container">
          <img src={ThinkingEmoji} alt="emoji" />
        </div>

        <div className="btn-container">
          <button className="btn-start">시작하기</button>
        </div>
      </main>
    </div>
  );
}

export default App;
