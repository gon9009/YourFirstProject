# yourFirstProject

- yourFirstProjects는 프론트엔드 개발 초보자들을 위한 리액트JS 프로젝트 추천 사이트 입니다
- 이 사이트는 사용자에게 질문/선택을 통해 가장 적합한 프로젝트룰 추천합니다

### 개발 기간 

- 1인 
- 5/9 - 5/27

### Project Start

```markdown
- 저장소 클론
git clone https://github.com/gon9009/YourFirstProject.git

- 프로젝트 시작  
npm install
```
### ! API 키 사용방법

```markdown
현재 프로젝트는 유튜브 API가 활용된 프로젝트입니다 
테스트용 API 키는 .env.test에 저장되어 있습니다 
저의 프로젝트를 clone 하셔서 사용하실때
cp .env.test .env 
위 명령어로 .env 파일을 복사해주세요 !  
```

### Project Skill

```markdown
-React/React-Router
-Context API
-Youtube APi
-Axios
-FontAweSome
```

### Directory Structure 

```markdown
-src
│
├─ assets (gif 이미지)
│
├─ components
│   ├── Hooks (커스텀 훅)
│   ├── Layout (공통 레이아웃)
│   ├── MainPage (메인페이지)
│   ├── Questions (질문/선택 페이지)
│   └── ResultPage (결과 추천 페이지)
│
├─ context (스코어 컨텍스트)
│
└─ data (질문/선택지 데이터)
```