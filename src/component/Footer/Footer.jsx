import React from "react";
import "./Footer.css";
import Logo from "../../assets/logo21.png";
import { NavLink } from "react-router-dom";

import { FaInstagram, FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-link">
          <span>Quick Links</span>
          <ul>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/project">Project</NavLink>
            <NavLink to="/team">Team</NavLink>
            <NavLink to="/event">Event</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </ul>
        </div>
        <div className="footer-row">
          <img src={Logo} alt="" />
          <p>
            {" "}
            <NavLink
              to="/"
              style={{ color: "rgb(20, 20, 99", fontSize: "13px" }}
            >
              Heuristics
            </NavLink>{" "}
            , Integral part of: <span>KamandPrompt - IIT Mandi</span>{" "}
          </p>
          <span>Follow Us</span>

          <ul className="footer-menu">
            <a href="" className="footer-item">
              <FaInstagram style={{ fontSize: "25px" }} />
            </a>
            <a
              href="https://www.facebook.com/heuristicsiitmandi/"
              target="_blank"
              className="footer-item"
            >
              <FaFacebook style={{ fontSize: "25px" }} />
            </a>
            <a href="" className="footer-item">
              <FaGoogle style={{ fontSize: "25px" }} />
            </a>
            <a type="email" className="footer-item">
              <FaLinkedin style={{ fontSize: "25px" }} />
            </a>
          </ul>
        </div>
      </div>
      {/* <div className="endPoint">
        Copyright @ 2023 Heuristics -IIT Mandi. All rights reserved
      </div> */}
    </div>
  );
};

export default Footer;
