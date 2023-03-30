import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer } from "./index";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="Contact">
        <p>Contact</p>
        <Link to="/">Go back</Link>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
