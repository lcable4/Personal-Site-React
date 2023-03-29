import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <Link to="/">Home</Link>
      <div className="navLinkDiv"></div>
      <div className="navLinkDiv">
        <Link to="/about">About me</Link>
      </div>
      <div className="navLinkDiv">
        <Link to="/portfolio">My work</Link>
      </div>

      <div className="navLinkDiv">
        <Link to="/contact">Contact me</Link>
      </div>
      <div className="navLinkDiv">
        <Link to="/blog">Blog</Link>
      </div>
    </div>
  );
};

export default Navbar;
