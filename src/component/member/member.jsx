import React from "react";
import "./member.css";
// import Card from "react-bootstrap/Card";
import Image1 from "../../assets/02.jpg";
import Image2 from "../../assets/01.jpg";
import Image3 from "../../assets/03.jpg";
import Image4 from "../../assets/04.jpg";
import Image5 from "../../assets/05.jpg";
import Image6 from "../../assets/06.jpg";

import Github from "../../assets/icons8-github-240.png";
import Facebook from "../../assets/facebook-app-symbol.png";
import Email from "../../assets/email (1).png";
import Chatbot from "../../assets/chatbot (1).png";
import LinkedIn from "../../assets/icons8-linkedin-480.png";
// import CardLink from "react-bootstrap/esm/CardLink";
// import Card from "../card/card";
const member = () => {
  return (
    <div className="members">
      <div className="card1-row">
        {/* 1st card */}
        <div className="card-col">
          <img src={Image1} alt="" />
          <span>Vyom Goel</span>
          <span>ML Enthusiast</span>
          <span>
            We strive to involve every student and make the club grow further
            and acheive new heigths.
          </span>
          <div className="m-icon" style={{ gap: "1.5rem" }}>
            <img src={Chatbot} alt="" />
            <img src={Facebook} alt="" />
            <img src={LinkedIn} alt="" />
          </div>
        </div>

        <div className="card-col">
          <img src={Image2} alt="" style={{ marginTop: "-17px" }} />
          <span style={{ bottom: "9rem" }}>Nidhi Jain</span>
          <span>Data Science Enthusiast</span>
          <span>
            The world is one big data problem. Torture the data, and it will
            confess to anything.
          </span>
          <div className="m-icon" style={{ gap: "1.5rem" }}>
            <img src={Chatbot} alt="" />
            <img src={Facebook} alt="" />
            <img src={LinkedIn} alt="" />
          </div>
        </div>
      </div>
      {/* 2nd-row */}
      <div className="card2-row">
        {/* 1st-card */}
        <div className="card-col1">
          <img src={Image3} alt="" />
          <span>Shubham Saurav</span>
          <span>Core Team Member</span>
          <div className="m-icon" style={{ gap: "1.5rem" }}>
            <img src={Chatbot} alt="" />
            <img src={Facebook} alt="" />
            <img src={LinkedIn} alt="" />
          </div>
        </div>
        {/* 2nd-card */}
        <div className="card-col1">
          <img src={Image4} alt="" />
          <span>Aditya Sarkar</span>
          <span>Core Team Member</span>
          <div className="m-icon" style={{ gap: "1.5rem" }}>
            <img src={Chatbot} alt="" />
            <img src={Facebook} alt="" />
            <img src={LinkedIn} alt="" />
          </div>
        </div>
        {/* 3rd-card */}
        <div className="card-col1">
          <img src={Image5} alt="" />
          <span>Kartik Kathuria</span>
          <span>Core Team Member</span>
          <div className="m-icon" style={{ gap: "1.5rem" }}>
            <img src={Chatbot} alt="" />
            <img src={Facebook} alt="" />
            <img src={LinkedIn} alt="" />
          </div>
        </div>
        {/* 4th-card */}
        <div className="card-col1">
          <img src={Image6} alt="" />
          <span>Saransh Jain</span>
          <span>Core Team Member</span>
          <div className="m-icon" style={{ gap: "1.5rem" }}>
            <img src={Chatbot} alt="" />
            <img src={Facebook} alt="" />
            <img src={LinkedIn} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default member;
