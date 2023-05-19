import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, ErrorrPage } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorrPage />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
