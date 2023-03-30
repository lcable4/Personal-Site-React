import React from "react";
import { Navbar, Footer } from "./index";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="HomePage">
      <div className="homePicture">
        <img
          src="/images/logos/portrait.png"
          alt="portrait"
          className="portrait"
        />
        <div className="quoteDiv">
          <p>"The best way to predict the future is to invent it."</p>
          <p>" - Alan Kay."</p>
        </div>
      </div>
      <div className="homeDescription">
        <Navbar />

        <div className="introduction">
          <h1>Logan Cable</h1>
          <h4>Full stack web developer</h4>
          <div className="linkDiv">
            <Link to="/portfolio">See my work</Link>
          </div>
          <div className="linkDiv">
            <Link to="/contact">Contact me</Link>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
