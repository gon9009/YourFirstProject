import React from "react";
import MainPage from "./components/MainPage";
import UserNamePage from "./components/UserNamePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/username" element={<UserNamePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
