import React from "react";
import MainPage from "./components/MainPage/MainPage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout.js";
import ResultPageContainer from "./components/ResultPage/ResultPageContainer.js";
import { ScoreProvider } from "./context/ScoreContext";
import QuestionsContainer from "./components/Questions/QuestionsContainer.js";

function App() {
  return (
    <ScoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/questions" element={<QuestionsContainer />} />
            <Route
              path="/result/:projectType"
              element={<ResultPageContainer />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ScoreProvider>
  );
}

export default App;
