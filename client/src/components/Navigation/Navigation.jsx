import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const [image, setImage] = useState("/images/goku.jpg");
  return (
    <div className="navbar">
      <div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className="brand">
            {"</> "}Coding<span>Panda</span>
          </h1>
        </Link>
      </div>
      <div className="user-detail">
        <h3 className="user-name">Goku</h3>
        <img
          src={image}
          alt="avatar"
          width="40"
          height="40"
          className="user-avatar"
        />
        <button className="logout-button">Logout</button>
      </div>
    </div>
  );
};

export default Navigation;
