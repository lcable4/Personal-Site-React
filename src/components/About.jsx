import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer } from "./index";

function About() {
  return (
    <>
      <Navbar />
      <div className="About">
        <div className="aboutDesc">
          <h1>About me</h1>
        </div>
      </div>
      <div className="Skills">
        <h1 className="aboutTitle">Skills</h1>
        <div className="skillsDivTop">
          <div className="topSkill">
            <h3>HTML</h3>
            <img
              src="/images/logos/html5.png"
              alt="HTML 5"
              className="skillLogo"
            />
          </div>
          <div className="topSkill">
            <h3>CSS</h3>
            <img src="/images/logos/css.png" alt="CSS" className="skillLogo" />
          </div>
          <div className="topSkill">
            <h3>Javascript</h3>
            <img
              src="/images/logos/javascript.png"
              alt="Javascript"
              className="skillLogo"
            />
          </div>
        </div>
        <div className="skillsDivBottom">
          <div className="bottomSkill">
            <h3>PostgreSQL</h3>
            <img
              src="/images/logos/postgresql.png"
              alt="PSQL"
              className="skillLogo"
            />
          </div>
          <div className="bottomSkill">
            <h3>React</h3>
            <img
              src="/images/logos/react.png"
              alt="React"
              className="skillLogo"
            />
          </div>
        </div>
      </div>
      <Link to="/">Go back</Link>
      <Footer />
    </>
  );
}

export default About;
