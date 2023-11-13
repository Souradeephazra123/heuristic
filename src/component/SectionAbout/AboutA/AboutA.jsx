import React from "react";
import "./AboutA.css";
import Image from "../../../assets/about-image.jpg";
const AboutR = () => {
  return (
    <div className="about-r">
      <img src={Image} alt="" />
      <div className="about-r-content">
        <p>
          At Heuristics we focus on enhancing the culture of Data Science,
          Machine Learning at IIT Mandi. It also expands to solve complex
          optimization problems. It underlies the whole field of Artificial
          Intelligence and the computer simulation of thinking, as they may be
          used in situations where there are no known algorithms. We organize
          regular events, challenges and workshops on the above mentioned
          topics.
        </p>
      </div>
    </div>
  );
};

export default AboutR;
