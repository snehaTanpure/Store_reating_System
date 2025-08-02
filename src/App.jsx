import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Owner from "./owner/owner.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Owner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;