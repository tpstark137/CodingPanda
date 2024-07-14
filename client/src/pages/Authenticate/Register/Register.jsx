import React from "react";
import AuthLayout from "../../../components/Shared/AuthLayout";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/otp-verification");
  };
  return (
    <AuthLayout>
      <div className="login-boxlogin">
        <h1>Register</h1>
        <p>
          <i>
            {" "}
            CodingPanda - A real Time collaborative editor with embeded compiler
          </i>
        </p>
        <form onSubmit={handleRegister}>
          <div>
            <label htmlFor="name">Enter your name</label>
            <input
              type="text"
              className="input-username"
              placeholder="Name"
              name="username"
            />
          </div>
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

          <button className="btn">Register</button>
        </form>
        <p style={{ fontSize: "16px" }}>
          Already have an account ?{" "}
          <Link
            style={{
              color: "purple",
              fontWeight: "bold",
              cursor: "pointer",
              textDecoration: "underline",
            }}
            to="/login"
          >
            Login
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Register;
