import React from "react";
import ParticlesComponent from "./Particles.config";
import "./AuthLayout.css";

const AuthLayout = ({ children }) => {
  return (
    <div className="root">
      <ParticlesComponent id="particles" />
      <div className="box">
        <div className="formbox">{children}</div>
        <div className="quotebox">
          <div className="quote-container">
            <div className="quote">CodingPanda</div>
            <div className="quote-small">
              'A Real Time Collaborative Editor for practicising for coding
              Interviews'
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
