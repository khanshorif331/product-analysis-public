import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  return (
    <nav className="nav">
      <div>
        <h1>Product Analysis</h1>
      </div>
      <div className="navigate-links">
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/reviews">Reviews</CustomLink>
        <CustomLink to="/dashboard">Dashboard</CustomLink>
        <CustomLink to="/blogs">Blogs</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </div>
    </nav>
  );
};

export default Header;
