import React from "react";
import MainPage from "./components/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Questions from "./components/Questions";
import ResultPage from "./components/ResultPage";
import { ScoreProvider } from "./context/ScoreContext";

function App() {
  return (
    <ScoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/result/:projectType" element={<ResultPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ScoreProvider>
  );
}

export default App;
