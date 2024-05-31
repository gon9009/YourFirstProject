// 가장 점수가 높은 프로젝트를 찾는 함수
const findHighestScore = (score) => {
  const highScore = Math.max(...score.map((project) => project.score));
  const highScoreProjects = score.filter(
    (project) => project.score === highScore
  );

  if (highScoreProjects.length > 1) {
    const randomIndex = Math.floor(Math.random() * highScoreProjects.length);
    return highScoreProjects[randomIndex];
  } else {
    return highScoreProjects[0];
  }
};

export default findHighestScore;