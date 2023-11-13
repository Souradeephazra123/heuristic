import React from "react";
import "./Teams.css";
import Image1 from "../../../assets/01.jpg";
import Image2 from "../../../assets/02.jpg";
import Image3 from "../../../assets/03.jpg";
import Image4 from "../../../assets/04.jpg";
import Image5 from "../../../assets/05.jpg";
import Image6 from "../../../assets/06.jpg";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
const Teams = () => {
  return (
    <div className="team-s">
      <span>Co-ordinator</span>
      <div className="team-s-content">
        <div className="team-col">
          <img src={Image1} alt="" />
          <p>Name</p>
          <p>slnlksdnkhdsadibaskjdbkasdask</p>
          <div className="team-logo">
            <a href="https://github.com/Vyom16">
              <FaGithub style={{ width: "20px", height: "auto" }} />
            </a>
            <a href="https://pc.iitmandi.co.in/heuristics/HTML/team.html#">
              <FaLinkedin style={{ width: "20px", height: "auto" }} />
            </a>

            <a href="https://www.facebook.com/vyom.goel.12">
              <FaFacebook style={{ width: "20px", height: "auto" }} />
            </a>
          </div>
        </div>
        <div className="team-col">
          <img src={Image2} alt="" />
          <p>Name</p>
          <p>slnlksdnkhdsadibaskjdbkasdask</p>
          <div className="team-logo">
            <a href="https://github.com/nidhijainpnp">
              <FaGithub style={{ width: "20px", height: "auto" }} />
            </a>
            <a href="https://pc.iitmandi.co.in/heuristics/HTML/team.html#">
              <FaLinkedin style={{ width: "20px", height: "auto" }} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100026427400017">
              <FaFacebook style={{ width: "20px", height: "auto" }} />
            </a>
          </div>
        </div>
      </div>
      <span>Core Team</span>
      <div className="team-s-content1">
        <div className="team-col1">
          <img src={Image3} alt="" />
          <p>Name</p>
          <p>slnlksdnkhdsadibaskjdbkasdask</p>
          <div className="team-logo">
            <FaGithub style={{ width: "20px", height: "auto" }} />
            <FaLinkedin style={{ width: "20px", height: "auto" }} />
            <FaFacebook style={{ width: "20px", height: "auto" }} />
          </div>
        </div>

        <div className="team-col1">
          <img src={Image4} alt="" />
          <p>Name</p>
          <p>slnlksdnkhdsadibaskjdbkasdask</p>
          <div className="team-logo">
            <FaGithub style={{ width: "20px", height: "auto" }} />
            <FaLinkedin style={{ width: "20px", height: "auto" }} />
            <FaFacebook style={{ width: "20px", height: "auto" }} />
          </div>
        </div>

        <div className="team-col1">
          <img src={Image5} alt="" />
          <p>Name</p>
          <p>slnlksdnkhdsadibaskjdbkasdask</p>
          <div className="team-logo">
            <FaGithub style={{ width: "20px", height: "auto" }} />
            <FaLinkedin style={{ width: "20px", height: "auto" }} />
            <FaFacebook style={{ width: "20px", height: "auto" }} />
          </div>
        </div>

        <div className="team-col1">
          <img src={Image6} alt="" />
          <p>Name</p>
          <p>slnlksdnkhdsadibaskjdbkasdask</p>
          <div className="team-logo">
            <FaGithub style={{ width: "20px", height: "auto" }} />
            <FaLinkedin style={{ width: "20px", height: "auto" }} />
            <FaFacebook style={{ width: "20px", height: "auto" }} />
          </div>
        </div>
      </div>

      {/* <div className="team-s-content">
        <div className="team-col">
          <img src={Boy} alt="" />
          <p>Name</p>
          <p>slnlksdnkhdsadibaskjdbkasdask</p>
          <div className="team-logo">
            <FaGithub style={{ width: "20px", height: "auto" }} />
            <FaLinkedin style={{ width: "20px", height: "auto" }} />
            <FaFacebook style={{ width: "20px", height: "auto" }} />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Teams;
