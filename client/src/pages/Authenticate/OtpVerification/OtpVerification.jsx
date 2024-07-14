import React from "react";
import AuthLayout from "../../../components/Shared/AuthLayout";
import "./OtpVerification.css";
import { Link, useNavigate } from "react-router-dom";

const OtpVerification = () => {
  const navigate = useNavigate();
  const OtpHandler = () => {
    navigate("/setup-avatar");
  };
  return (
    <AuthLayout>
      <h1>OTP-VERIFICATION 🔒</h1>
      <p>We have just sent you OTP on your registered email !!</p>
      <form action="#" onSubmit={OtpHandler}>
        <div className="verification-code">
          <label htmlFor="otp">Enter Code</label>
          <input
            type="text"
            className="input-otp"
            placeholder="otp verification code"
            name="otp"
          />
        </div>
        <button className="btn">Submit</button>
      </form>
      <p style={{ fontSize: "16px" }}>
        Did'nt receive verification code ?{" "}
        <Link
          style={{
            color: "purple",
            fontWeight: "bold",
            cursor: "pointer",
            textDecoration: "underline",
          }}
          to="/login"
        >
          Resend Otp
        </Link>
      </p>
    </AuthLayout>
  );
};

export default OtpVerification;
