import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer } from "./index";

function Portfolio() {
  return (
    <>
      <Navbar />
      <div className="Portfolio">
        <h1>My Work</h1>
        <div className="portfolioTop">
          <div className="projectTop">
            <h3>Fitness Tracker</h3>
            <a
              href="https://fitnesstracker-application.netlify.app/"
              target="_blank"
            >
              <img
                src="/images/projects/fitnessTracker.png"
                alt="Fitness Tracker"
                className="projectImagesTop"
              />
            </a>
          </div>
          <div className="projectTop">
            <h3>Stranger's Things</h3>
            <a
              href="https://strangersthings-marketplace.netlify.app/"
              target="_blank"
            >
              <img
                src="/images/projects/stranger'sThings.png"
                alt="Stranger's Things"
                className="projectImagesTop"
              />
            </a>
          </div>
        </div>
        <div className="portfolioBottom">
          <div className="project">
            <h3>Puppy Bowl</h3>
            <img
              src="/images/projects/puppyBowl.PNG"
              alt="Puppy Bowl"
              className="projectImages"
            />
          </div>
          <div className="project">
            <h3>Qwirty</h3>
            <img
              src="/images/projects/qwirty.png"
              alt="Qwirty"
              className="projectImages"
            />
          </div>
          <div className="project">
            <h3>Tic-Tac-Toe</h3>
            <img
              src="/images/projects/ticTacToe.png"
              alt="Tic-Tac-Toe"
              className="projectImages"
            />
          </div>
        </div>
        <Link to="/">Go back</Link>
      </div>
      <Footer />
    </>
  );
}

export default Portfolio;
