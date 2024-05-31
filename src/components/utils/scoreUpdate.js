// 스코어 업데이트 함수
function scoreUpdate(answer,score,setScore) {
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

export default scoreUpdate;
