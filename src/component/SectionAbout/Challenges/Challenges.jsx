import React from "react";
import "./Challenges.css";
import Challenge from "../../../assets/about-image.jpg";
import { NavLink } from "react-router-dom";
const Challenges = () => {
  return (
    <div className="challenges">
      <div className="challenge-content">
        <span>Competitions & Challenges</span>
        <p>
          We often organize several Machine Learning competitions, several
          Hacking competitions and other Interesting challenges for our
          Community and strongly encourage students To participate and learn.
          <br />
          <NavLink to="/event" className="text-red-400">
            Know More
          </NavLink>
        </p>
      </div>
      <div className="challenge-logo">
        <img src={Challenge} alt="" />
      </div>
    </div>
  );
};

export default Challenges;
