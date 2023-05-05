import React from "react";
import { Navbar, Footer } from "./index";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="HomePage">
      <div className="homeDescription">
        <Navbar />

        <div className="introduction">
          <div className="headersDiv">
            <h1 className="homePageHeaders1">Logan Cable</h1>
            <h3 className="homePageHeaders">Full stack web developer</h3>
          </div>
          <img
            src="/images/logos/LoganCable.jpg"
            alt="portrait"
            className="portrait"
          />
          <div className="quoteDiv">
            <p>"The best way to predict the future is to invent it."</p>
            <p>" - Alan Kay."</p>
          </div>
          <div className="socialLinksDiv">
            <div className="linkDiv">
              <Link className="homePageLinks" to="/portfolio">
                See my work
              </Link>
            </div>
            <div className="linkDiv">
              <a
                className="homePageLinks"
                href="/resume/Logan.Cable.pdf"
                target="_blank"
              >
                Resume
              </a>
            </div>
            <div className="linkDiv">
              <Link className="homePageLinks" to="/contact">
                Contact me
              </Link>
            </div>
          </div>
          <div className="socialLinksDiv">
            <h1 className="aboutHeaders1">Connect with me</h1>
            <div className="socialLinksDiv">
              <a
                className="aboutLink"
                target="_blank"
                href="https://github.com/lcable4"
              >
                <img
                  className="aboutImgs"
                  src="/images/logos/github.png"
                  alt="githubLogo"
                />
              </a>

              <a
                className="aboutLink"
                target="_blank"
                href="https://www.linkedin.com/in/logan-cable-619839148/"
              >
                <img
                  className="aboutImgs"
                  src="/images/logos/linkedIn.png"
                  alt="linkedInLogo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
