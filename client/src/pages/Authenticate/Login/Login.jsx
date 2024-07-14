import React from "react";
import AuthLayout from "../../../components/Shared/AuthLayout";
import "./login.css";
import GoogleSVG from "../.../../../../assets/google.svg";
import GitHub from "../.../../../../assets/github.png";
import Twitter from "../.../../../../assets/twitter.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <AuthLayout>
        <div className="login-boxlogin">
          <h1>Welcome to CodingPanda</h1>
          <p>
            <i>A real Time collaborative editor with embeded compiler</i>
          </p>
          <form action="#">
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="input-email"
                placeholder="Email"
                name="email"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="input-password"
                placeholder="Password"
                name="password"
              />
            </div>

            <button className="btn">Login</button>
          </form>
          <p style={{ fontSize: "16px" }}>
            Don't have an account ?{" "}
            <Link
              style={{
                color: "purple",
                fontWeight: "bold",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              to="/register"
            >
              Get Username
            </Link>
          </p>
          <div className="alternate-text">Or Login with </div>
          <div className="alternate-boxes">
            <button
              variant="contained"
              color="primary"
              className="alternate-box"
            >
              <img src={GoogleSVG} alt="googleLogo" />
            </button>
            <button
              variant="contained"
              color="primary"
              className="alternate-box"
            >
              <img width="28px" height="28px" src={GitHub} alt="githubLogo" />
            </button>
            <button
              variant="contained"
              color="primary"
              className="alternate-box"
            >
              <img width="28px" height="28px" src={Twitter} alt="githubLogo" />
            </button>
          </div>
        </div>
      </AuthLayout>
    </div>
  );
};

export default Login;
