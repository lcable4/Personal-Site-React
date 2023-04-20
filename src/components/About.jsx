import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer } from "./index";

function About() {
  return (
    <>
      <div className="aboutPageContainer">
        <div className="About">
          <Navbar />
          <div className="aboutDesc">
            <h1 className="aboutHeaders1">About me</h1>
            <div className="paragraph">
              <p className="aboutPTags">
                Hi there! My name is Logan, and I'm a former CDL driver in the
                beverage industry turned Fullstack developer. After spending
                many years on the road, I decided to pursue a new career in
                tech, and recently graduated from Fullstack Academy where I
                learned HTML, CSS, JavaScript, React, and PSQL.
              </p>
            </div>
            <div className="paragraph">
              <p className="aboutPTags">
                During my time at Fullstack, I had the opportunity to work on
                several projects with partners as part of the curriculum. These
                projects allowed me to hone my skills in web development and
                collaborate effectively using GitHub. I'm excited to showcase my
                projects and highlight my contributions to each of them.
              </p>
            </div>
            <div className="paragraph">
              <p className="aboutPTags">
                As a former CDL driver, I bring a unique perspective to web
                development. I'm used to solving problems on the fly and
                managing complex logistical challenges. I believe these skills
                are transferrable to the tech industry and will help me excel as
                a web developer.
              </p>
            </div>
            <div className="paragraph">
              <p className="aboutPTags">
                When I'm not coding, I enjoy cooking and listening to music. I'm
                excited about the opportunities ahead of me in the tech
                industry, and I'm eager to find a role where I can contribute my
                skills and continue to learn and grow as a developer.
              </p>
            </div>
            <div className="paragraph">
              <p className="aboutPTags">
                Thank you for taking the time to read my About Me section, and
                feel free to reach out if you have any questions or
                opportunities to discuss!
              </p>
            </div>
          </div>
        </div>
        <div className="Skills">
          <h1 className="aboutHeaders1">Skills</h1>
          <div className="linkDiv">
            <a
              className="homePageLinks"
              href="/resume/Outreach_FullStack_Certificate_Cable.pdf"
              target="_blank"
            >
              Full Stack Academy certificate
            </a>
          </div>
          <div className="skillsDivTop">
            <div className="topSkill">
              <h3 className="aboutHeaders">HTML</h3>
              <img
                src="/images/logos/html5.png"
                alt="HTML 5"
                className="skillLogo"
              />
            </div>
            <div className="topSkill">
              <h3 className="aboutHeaders">CSS</h3>
              <img
                src="/images/logos/css.png"
                alt="CSS"
                className="skillLogo"
              />
            </div>
            <div className="topSkill">
              <h3 className="aboutHeaders">Javascript</h3>
              <img
                src="/images/logos/javascript.png"
                alt="Javascript"
                className="skillLogo"
              />
            </div>
          </div>
          <div className="skillsDivBottom">
            <div className="bottomSkill">
              <h3 className="aboutHeaders">PostgreSQL</h3>
              <img
                src="/images/logos/postgresql.png"
                alt="PSQL"
                className="skillLogo"
              />
            </div>
            <div className="bottomSkill">
              <h3 className="aboutHeaders">React</h3>
              <img
                src="/images/logos/react.png"
                alt="React"
                className="skillLogo"
              />
            </div>
          </div>
          <Link className="goBackLinks" to="/">
            Go Back
          </Link>
        </div>
      </div>
    </>
  );
}

export default About;
