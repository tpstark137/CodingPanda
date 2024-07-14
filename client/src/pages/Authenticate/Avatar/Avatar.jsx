import React, { useState } from "react";
import AuthLayout from "../../../components/Shared/AuthLayout";
import "./Avatar.css";
import { useNavigate } from "react-router-dom";

const Avatar = () => {
  const [image, setImage] = useState("/images/goku.jpg");
  const [user, setUser] = useState("Goku");
  const navigate = useNavigate();

  function captureImage(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      setImage(reader.result);
    };
  }

  const handleAvatar = () => {
    navigate("/");
  };

  return (
    <AuthLayout>
      <h1>Hi , {user}</h1>
      <h1>Setup your Avatar 😴</h1>
      <p style={{ fontStyle: "italic" }}>
        Your profile picture will be visible publicly &nbsp; : )
      </p>
      <div className="avatarContainer">
        <p className="subHeading">How is this photo?</p>
        <div className="avatarWrapper">
          <img className="avatarImage" src={image} alt="avatar" />
        </div>

        <div>
          <input
            onChange={captureImage}
            id="avatarInput"
            type="file"
            className="avatarInput"
          />
          <label className="avatarLabel" htmlFor="avatarInput">
            Choose a different photo
          </label>
        </div>
      </div>
      <div>
        <button className="btn" onClick={handleAvatar}>
          Click on Next
        </button>
      </div>
      <p
        style={{
          marginTop: "20px",
          fontWeight: "lighter",
          fontSize: "16px",
        }}
      >
        {" "}
        By Clicking on Next you are accepting our{" "}
        <span
          style={{
            color: "purple",
            textDecoration: "underline",
            fontWeight: "bold",
          }}
        >
          Terms and Conditions{" "}
        </span>
      </p>
    </AuthLayout>
  );
};

export default Avatar;
