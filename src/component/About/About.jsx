import React from "react";
import "./About.css";
import img from "../../assets/particle.jpg";
import { NavLink } from "react-router-dom";
const about = () => {
  return (
    <div className="about" id="about">
      <span className="about-s1">About</span>
      <span className="about-s2">Welcome to Heurastics</span>
      <div className="about-content">
        <img src={img} alt="" />
        <p>
          At Heuristics we focus on enhancing the culture of Data Science,
          Machine Learning at IIT Mandi. It also expands to solve complex
          optimization problems. It underlies the whole field of Artificial
          Intelligence and the computer simulation of thinking, as they may be
          used in situations where there are no known algorithms. We organize
          regular events, challenges and workshops on the above mentioned
          topics.
          <br />
          <NavLink to="/about" style={{ color: "blue", fontWeight: "700" }}>
            Know More
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default about;
