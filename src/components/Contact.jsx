import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer } from "./index";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <Navbar />
      <div className="contactTitleDiv">
        <h1 className="contactTitle">Contact Me</h1>
        <h3 className="contactHeader">I would love to hear from you.</h3>
      </div>
      <div className="contactForm">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdBCt9RrLnn1dVYAkwCEPa0XcE9emiNi_dGYOEM8_WvlQRYiA/viewform?embedded=true"
          width="640"
          height="750"
        >
          Loading…
        </iframe>
      </div>
      <Link to="/">Go back</Link>
      <Footer />
    </>
  );
}

export default Contact;
