import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer } from "./index";

function Portfolio() {
  return (
    <>
      <Navbar />
      <h1 className="portFolioHeaders1">My Work</h1>
      <div className="Portfolio">
        <div className="portfolioCapstone">
          <div className="projectCapstone">
            <a
              href="https://driveze.netlify.app//"
              target="_blank"
              className="portfolioLinks"
            >
              <h3 className="portFolioHeaders">DrivEze Car Rental</h3>
              <img
                src="/images/projects/DrivEze-lite.png"
                alt="Fitness Tracker"
                className="projectImagesCapstone"
              />
            </a>
          </div>
        </div>
        <div className="portfolioTop">
          <div className="projectTop">
            <a
              href="https://fitnesstracker-application.netlify.app/"
              target="_blank"
              className="portfolioLinks"
            >
              <h3 className="portFolioHeaders">Fitness Tracker</h3>
              <img
                src="/images/projects/fitnessTracker.png"
                alt="Fitness Tracker"
                className="projectImagesTop"
              />
            </a>
          </div>
          <div className="projectTop">
            <a
              href="https://strangersthings-marketplace.netlify.app/"
              target="_blank"
              className="portfolioLinks"
            >
              <h3 className="portFolioHeaders">Stranger's Things</h3>
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
            <h3 className="portFolioHeaders">Puppy Bowl</h3>
            <img
              src="/images/projects/puppyBowl.png"
              alt="Puppy Bowl"
              className="projectImages"
            />
          </div>
          <div className="project">
            <h3 className="portFolioHeaders">Qwirty</h3>
            <img
              src="/images/projects/qwirty.png"
              alt="Qwirty"
              className="projectImages"
            />
          </div>
          <div className="project">
            <a
              href="https://tictactoe-logancable.netlify.app/"
              target="_blank"
              className="portfolioLinks"
            >
              <h3 className="portFolioHeaders">Tic-Tac-Toe</h3>
              <img
                src="/images/projects/ticTacToe.png"
                alt="Tic-Tac-Toe"
                className="projectImages"
              />
            </a>
          </div>
        </div>
        <Link className="goBackLinks" to="/">
          Go back
        </Link>
      </div>
    </>
  );
}

export default Portfolio;
