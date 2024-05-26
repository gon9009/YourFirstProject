import { useContext } from "react";
import { ScoreContext } from "../context/ScoreContext";


// 스코어 업데이트
// 일반 함수로 취급 , cOntext 사용 불가 
function ScoreUpdate(answer) {
  const { score, setScore } = useContext({ScoreContext})
  const selectedProject = score.find(
    (project) => project.name === answer.project
  );
  if (selectedProject) {
    const updatedScore = score.map((project) => {
      if (project.name === selectedProject.name) {
        if (project.name === "영화 추천 앱") {
          return { ...project, score: project.score + 1.5 };
        }
        return { ...project, score: project.score + 1 };
      }
      return project;
    });
    setScore(updatedScore);
  }
}

export default ScoreUpdate;
