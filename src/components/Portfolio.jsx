import * as React from "react";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import { Navbar } from "./";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function ProjectCard({ img, title, link, linkName }) {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia component="img" height="100" image={img} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        {linkName && (
          <Button href={link} target="_blank" size="small">
            {linkName}
          </Button>
        )}
        {!linkName && (
          <Button href={link} target="_blank" size="small">
            Visit
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

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
        <div className="cardContainer">
          {itemData.map((item) => (
            <ProjectCard
              key={item.title}
              img={item.img}
              title={item.title}
              link={item.link}
              linkName={item.linkName}
            />
          ))}
        </div>
        <Link className="goBackLinks" to="/">
          Go back
        </Link>
      </div>
    </>
  );
}

export default Portfolio;
