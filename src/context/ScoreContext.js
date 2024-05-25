import React, { createContext, useState } from "react";
import ProjectScore from "../data/ProjectScore";

export const ScoreContext = createContext();

export const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState(ProjectScore);
  const initialScore = ProjectScore;

  // 메인 페이지 이동시 점수 초기화
  const resetScore = () => setScore(initialScore);
  return (
    <ScoreContext.Provider value={{ score, setScore, resetScore }}>
      {children}
    </ScoreContext.Provider>
  );
};
