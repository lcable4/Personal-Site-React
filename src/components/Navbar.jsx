import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const navbarClass = isHomePage ? "navbar-home" : "navbar";

  return (
    <div className="navbar">
      <Link className="navBarLinks" to="/">
        Home
      </Link>
      <div className="navLinkDiv"></div>
      <div className="navLinkDiv">
        <Link className="navBarLinks" to="/about">
          About me
        </Link>
      </div>
      <div className="navLinkDiv">
        <Link className="navBarLinks" to="/portfolio">
          My work
        </Link>
      </div>

      <div className="navLinkDiv">
        <Link className="navBarLinks" to="/contact">
          Contact me
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
