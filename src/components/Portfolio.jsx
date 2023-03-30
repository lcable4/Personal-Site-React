import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer } from "./index";

function Portfolio() {
  return (
    <>
      <Navbar />
      <div className="Portfolio">
        <p>Portfolio</p>
        <Link to="/">Go back</Link>
      </div>
      <Footer />
    </>
  );
}

export default Portfolio;
