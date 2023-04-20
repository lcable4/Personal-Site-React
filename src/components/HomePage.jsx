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
          <h1 className="homePageHeaders">Logan Cable</h1>
          <h3 className="homePageHeaders">Full stack web developer</h3>
          <div className="linkDiv">
            <Link className="homePageLinks" to="/portfolio">
              See my work
            </Link>
          </div>
          <div className="linkDiv">
            <a
              className="homePageLinks"
              href="/resume/Logan_Cable_Resume_19-04-2023-21-23-50.pdf"
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
