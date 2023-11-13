import React from "react";
import "./Welcome.css";
import Rocket from "../../../assets/rocket (1).png";
import Growth from "../../../assets/growth-chart (1).png";
import Question from "../../../assets/question-mark.png";
import Cube from "../../../assets/delivery-box.png";
import Star from "../../../assets/star.png";
import Home from "../../../assets/home.png";

const Welcome = () => {
  return (
    <div className="welcome">
      {/* <p>WELCOME TO HEURISTICS</p> */}
      <h1>Our Core Values</h1>
      <div className="welcome-content">
        {/* this is 1st row */}
        <div className="welcome-row">
          {/* this is 1st col */}
          <div className="welcome-col">
            <div className="welcome-logo">
              <img src={Rocket} alt="" />
            </div>
            <div className="logo-content">
              <p>Fast</p>
              <p>We strive for fast models</p>
            </div>
          </div>
          {/* this is 2nd col */}
          <div className="welcome-col">
            <div className="welcome-logo">
              <img src={Growth} alt="" />
            </div>
            <div className="logo-content">
              <p>Accurate</p>
              <p>We are the godfathers of accuracy.</p>
            </div>
          </div>
          {/* this is 3rd col */}
          <div className="welcome-col">
            <div className="welcome-logo">
              <img src={Question} alt="" />
            </div>
            <div className="logo-content">
              <p>Ready To Help</p>
              <p>We are always ready to help each other and grow together</p>
            </div>
          </div>
        </div>
        {/* this is 2nd row */}
        <div className="welcome-row">
          {/* this is 1st col */}
          <div className="welcome-col">
            <div className="welcome-logo">
              <img src={Cube} alt="" />
            </div>
            <div className="logo-content">
              <p>Endless Possibilities</p>
              <p>
                This is the place where you have endless possibilities of
                success.
              </p>
            </div>
          </div>
          {/* this is 2nd col */}
          <div className="welcome-col">
            <div className="welcome-logo">
              <img src={Star} alt="" />
            </div>
            <div className="logo-content">
              <p>Powerful Performance</p>
              <p>We always look for powerful performance from our members.</p>
            </div>
          </div>
          {/* this is 3rd col */}
          <div className="welcome-col">
            <div className="welcome-logo">
              <img src={Home} alt="" />
            </div>
            <div className="logo-content">
              <p>Family</p>
              <p>We are just a family who vibe with AI.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
