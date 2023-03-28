import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
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
          </div>
          <div className="topSkill">
            <h3>CSS</h3>
          </div>
          <div className="topSkill">
            <h3>Javascript</h3>
          </div>
        </div>
        <div className="skillsDivBottom">
          <div className="bottomSkill">
            <h3>PostgreSQL</h3>
          </div>
          <div className="bottomSkill">
            <h3>React</h3>
          </div>
        </div>
      </div>
      <Link to="/">Go back</Link>
    </>
  );
}

export default About;
