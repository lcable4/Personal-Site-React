import React from "react";
import { Navbar } from "./";
import { HomePage, About, Portfolio, Contact } from "./index";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Main = () => {
  return (
    <div id="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
