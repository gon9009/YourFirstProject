const QnA = [
  {
    questionNum: "Q1.",
    question: "어떤 종류의 앱에 관심이 더 가시나요?",
    answer1: { text: "📝 간단한 리스트 형태의 앱", project: "투두 리스트" },
    answer2: { text: "📊 데이터를 시각화하는 앱", project: "날씨 앱" }
  },
  {
    questionNum: "Q2.",
    question: "어떤 종류의 데이터를 다루고 싶으세요?",
    answer1: { text: "✏️ 텍스트 데이터", project: "투두 리스트" },
    answer2: { text: "🖼️ 이미지 데이터", project: "이미지 갤러리" }
  },
  {
    questionNum: "Q3.",
    question: "어떤 기능을 앱에 추가하고 싶으세요?",
    answer1: { text: "🛠️ 데이터의 CRUD 작업", project: "쇼핑리스트" },
    answer2: { text: "🌐 외부 API와의 상호작용", project: "영화 추천 앱" }
  },
  {
    questionNum: "Q4.",
    question: "어떤 종류의 UI/UX를 구현하고 싶으세요?",
    answer1: { text: "🔹 간단하고 직관적인 UI", project: "계산기" },
    answer2: { text: "🔸 다양한 애니메이션 효과를 갖춘 UI", project: "퀴즈" }
  },
  {
    questionNum: "Q5.",
    question: "어떤 종류의 데이터 관리를 하고 싶으세요?",
    answer1: { text: "💾 로컬 저장소를 활용한 간단한 데이터 관리", project: "투두 리스트" },
    answer2: { text: "🔗 외부 데이터 소스와의 연동을 통한 데이터 관리", project: "쇼핑리스트" }
  },
  {
    questionNum: "Q6.",
    question: "어떤 종류의 데이터 시각화를 원하시나요?",
    answer1: { text: "🗒️ 텍스트 데이터의 간단한 시각화", project: "계산기" },
    answer2: { text: "📉 그래프나 차트를 활용한 데이터 시각화", project: "날씨 앱" }
  },
  {
    questionNum: "Q7.",
    question: "어떤 종류의 외부 API를 활용하고 싶으세요?",
    answer1: { text: "☀️ 날씨 정보 API", project: "날씨 앱" },
    answer2: { text: "🎬 영화 정보 API", project: "영화 추천 앱" }
  },
  {
    questionNum: "Q8.",
    question: "어떤 종류의 상태 관리를 원하시나요?",
    answer1: { text: "🔹 간단한 상태 관리", project: "계산기" },
    answer2: { text: "🔸 복잡한 상태 관리", project: "퀴즈" }
  },
  {
    questionNum: "Q9.",
    question: "어떤 종류의 사용자 입력 처리를 원하시나요?",
    answer1: { text: "✏️ 간단한 사용자 입력 처리", project: "쇼핑리스트" },
    answer2: { text: "🛡️ 복잡한 사용자 입력 처리와 유효성 검사", project: "퀴즈" }
  },
  {
    questionNum: "Q10.",
    question: "현재 어떤 종류의 프로젝트에 가장 관심이 가나요?",
    answer1: { text: "💡 실생활에서 유용하게 활용할 수 있는 프로젝트", project: "투두 리스트" },
    answer2: { text: "🧩 새로운 기술과 기능을 배울 수 있는 도전적인 프로젝트", project: "퀴즈" }
  },
];

export default QnA;

// const QnA = [
//   {
//     questionNum: "Q1.",
//     question: "어떤 종류의 앱에 관심이 더 가시나요?",
//     answer1: "📝 간단한 리스트 형태의 앱",
//     answer2: "📊 데이터를 시각화하는 앱",
//   },
//   {
//     questionNum: "Q2.",
//     question: "어떤 종류의 데이터를 다루고 싶으세요?",
//     answer1: "✏️ 텍스트 데이터",
//     answer2: "🖼️ 이미지 데이터",
//   },
//   {
//     questionNum: "Q3.",
//     question: "어떤 기능을 앱에 추가하고 싶으세요?",
//     answer1: "🛠️ 데이터의 CRUD 작업",
//     answer2: "🌐 외부 API와의 상호작용",
//   },
//   {
//     questionNum: "Q4.",
//     question: "어떤 종류의 UI/UX를 구현하고 싶으세요?",
//     answer1: "🔹 간단하고 직관적인 UI",
//     answer2: "🔸 다양한 애니메이션 효과를 갖춘 UI",
//   },
//   {
//     questionNum: "Q5.",
//     question: "어떤 종류의 데이터 관리를 하고 싶으세요?",
//     answer1: "💾 로컬 저장소를 활용한 간단한 데이터 관리",
//     answer2: "🔗 외부 데이터 소스와의 연동을 통한 데이터 관리",
//   },
//   {
//     questionNum: "Q6.",
//     question: "어떤 종류의 데이터 시각화를 원하시나요?",
//     answer1: "🗒️ 텍스트 데이터의 간단한 시각화",
//     answer2: "📉 그래프나 차트를 활용한 데이터 시각화",
//   },
//   {
//     questionNum: "Q7.",
//     question: "어떤 종류의 외부 API를 활용하고 싶으세요?",
//     answer1: "☀️ 날씨 정보 API",
//     answer2: "🎬 영화 정보 API",
//   },
//   {
//     questionNum: "Q8.",
//     question: "어떤 종류의 상태 관리를 원하시나요?",
//     answer1: "🔹 간단한 상태 관리",
//     answer2: "🔸 복잡한 상태 관리",
//   },
//   {
//     questionNum: "Q9.",
//     question: "어떤 종류의 사용자 입력 처리를 원하시나요?",
//     answer1: "✏️ 간단한 사용자 입력 처리",
//     answer2: "🛡️ 복잡한 사용자 입력 처리와 유효성 검사",
//   },
//   {
//     questionNum: "Q10.",
//     question: "현재 어떤 종류의 프로젝트에 가장 관심이 가나요?",
//     answer1: "💡 실생활에서 유용하게 활용할 수 있는 프로젝트",
//     answer2: "🧩 새로운 기술과 기능을 배울 수 있는 도전적인 프로젝트",
//   },
// ];

// export default QnA;
