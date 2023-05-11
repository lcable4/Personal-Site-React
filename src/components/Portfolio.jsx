import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer } from "./index";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

function Portfolio() {
  const itemData = [
    {
      img: "/images/projects/DrivEze-lite.png",
      title: "DrivEze Car Rentals",

      link: "https://driveze.netlify.app//",
      linkName: "DrivEze",
    },
    {
      img: "/images/projects/fitnessTracker.png",
      title: "Fitness Tracker",

      link: "https://fitnesstracker-application.netlify.app/",
    },
    {
      img: "/images/projects/stranger'sThings.png",
      title: "Stranger's Things",

      link: "https://strangersthings-marketplace.netlify.app/",
    },
    {
      img: "/images/projects/ticTacToe.png",
      title: "Tic Tac Toe",

      link: "https://tictactoe-logancable.netlify.app/",
    },
    {
      img: "/images/projects/mumblr.png",
      title: "Mumblr",

      link: "https://github.com/lcable4/Mumblr",
    },
    {
      img: "/images/projects/puppyBowl.png",
      title: "Puppy Bowl",

      link: "https://github.com/jina366/puppyBowl/tree/main/src/components",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="portfolioContainer">
        <h1 className="portFolioHeaders1">My Work</h1>
        <ImageList sx={{ width: "100%", height: "100%", objectFit: "contain" }}>
          {itemData.map((item) => (
            <ImageListItem className="imgList" key={item.img}>
              <img
                src={`${item.img}?w=200&fit=crop&auto=format`}
                srcSet={`${item.img}?w=200&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                style={{
                  width: "300px",
                  height: "300px",
                  objectFit: "contain",
                  marginBottom: "20px",
                  margin: "7px",
                }}
              />
              <a
                href={item.link}
                style={{
                  textDecoration: "none",
                  color: "blue",
                  textAlign: "center",
                  fontSize: "20px",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImageListItemBar title={item.title} position="below" />
              </a>
            </ImageListItem>
          ))}
        </ImageList>

        <Link className="goBackLinks" to="/">
          Go back
        </Link>
      </div>
    </>
  );
}

export default Portfolio;
