import React from "react";
import facebookIcon from "./facbook.png";
import googleLogo from "./google-logo.svg";
import appleLogo from "./group.png";
import waveImage from "./image.svg";
import signalIcon from "./light-2.svg";
import wifiIcon from "./light.svg";
import batteryIcon from "./rectangle-23.svg";
import illustration from "./undraw-login-re-4vu2-1.svg";
import "./style.css";

export const Login = () => {
  return (
    <div className="login">
      <header className="status-bar">
        <div className="status-icons">
          <img
            className="network-signal-light"
            alt="Network signal light"
            src={signalIcon}
          />
          <img
            className="wifi-signal-light"
            alt="Wifi signal light"
            src={wifiIcon}
          />
          <div className="battery-light">
            <img className="img" alt="Battery" src={batteryIcon} />
            <div className="battery-level">
              <div className="battery-fill" />
            </div>
          </div>
        </div>
        <img className="time-light" alt="Time" src={waveImage} />
      </header>

      <main className="login-container">
        <img
          className="illustration"
          alt="Login illustration"
          src={illustration}
        />
        <h1 className="login-title">Login Details</h1>
        <form className="login-form">
          <input
            type="text"
            className="input-field"
            placeholder="Username, email & phone number"
          />
          <input
            type="password"
            className="input-field"
            placeholder="Password"
          />
          <a href="#" className="forgot-password">
            Forgot Password?
          </a>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="divider">
          <div className="line" />
          <span className="divider-text">Or Sign up With</span>
          <div className="line" />
        </div>
        <div className="social-icons">
          <img className="social-icon" alt="Google" src={googleLogo} />
          <img className="social-icon" alt="Facebook" src={facebookIcon} />
          <img className="social-icon" alt="Apple" src={appleLogo} />
        </div>
      </main>
    </div>
  );
};
