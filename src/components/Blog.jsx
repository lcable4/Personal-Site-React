import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer } from "./index";

function Blog() {
  return (
    <>
      <Navbar />
      <div className="Blog">
        <p>Blog</p>
        <Link to="/">Go back</Link>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
