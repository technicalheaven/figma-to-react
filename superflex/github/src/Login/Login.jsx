import React from "react";
import facebookIcon from "./facbook.png";
import googleLogo from "./google-logo.svg";
import appleLogo from "./group.png";
import waveImage from "./image.svg";
import signalIcon from "./light-2.svg";
import wifiIcon from "./light.svg";
import batteryIcon from "./rectangle-23.svg";
import loginIllustration from "./undraw-login-re-4vu2-1.svg";
import "./style.css";

export const Login = () => {
  return (
    <main className="login">
      <section className="login-container">
        <header className="status-bar">
          <div className="status-icons">
            <img
              className="network-signal-light"
              alt="Network signal light"
              src={signalIcon}
            />
            <img
              className="wifi-signal-light"
              alt="WiFi signal light"
              src={wifiIcon}
            />
            <div className="battery-light">
              <img className="battery-icon" alt="Battery" src={batteryIcon} />
              <div className="battery-level">
                <div className="battery-fill" />
              </div>
            </div>
          </div>
          <img className="time-light" alt="Time display" src={waveImage} />
        </header>

        <div className="illustration-container">
          <img
            className="login-illustration"
            alt="Login illustration"
            src={loginIllustration}
          />
        </div>

        <h1 className="login-title">Login Details</h1>

        <form className="login-form">
          <label className="input-label">
            <input
              type="text"
              placeholder="Username, email & phone number"
              className="input-field"
            />
          </label>
          <label className="input-label">
            <input
              type="password"
              placeholder="Password"
              className="input-field"
            />
          </label>
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

        <div className="social-login">
          <img className="social-icon" alt="Google logo" src={googleLogo} />
          <img className="social-icon" alt="Facebook logo" src={facebookIcon} />
          <img className="social-icon" alt="Apple logo" src={appleLogo} />
        </div>
      </section>
    </main>
  );
};
