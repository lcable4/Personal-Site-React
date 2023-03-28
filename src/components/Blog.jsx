import React from "react";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <div className="Blog">
      <p>Blog</p>
      <Link to="/">Go back</Link>
    </div>
  );
}

export default Blog;
