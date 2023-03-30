import React from "react";
import { Link, useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const footerClass = isHomePage ? "footer-home" : "footer";

  return (
    <div className={footerClass}>
      <h1>I am footer</h1>
    </div>
  );
}

export default Footer;
