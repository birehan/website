import React from "react";
import Intro from "../components/Intro";
import BlogComponent from "../components/Blogs";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col ">
      <Intro />
      <div className="mt-4 lg:mt-8">
        <Link to="/" className="  text-[1.25rem] spacing-1 font-[549]">
          <span className="sr-only">Your Company</span>
          Recent Posts
        </Link>
        <BlogComponent />
      </div>
    </div>
  );
};

export default HomePage;
