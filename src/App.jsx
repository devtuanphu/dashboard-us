import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
