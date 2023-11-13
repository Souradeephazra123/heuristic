import React from "react";
import "./Hero.css";
import videobg from "../../assets/video (2160p).mp4";
import Logo from "../../assets/97462401_100631514997581_806192625911595008_n.png";
import { FaChevronCircleDown } from "react-icons/fa";
import { Link } from "react-scroll";
const Hero = () => {
  return (
    <div className="hero">
      <video src={videobg} autoPlay loop muted />
      <img src={Logo} alt="" />
      <h1>A club at IIT Mandi dealing with all kinds of heuristics</h1>
      <p>Scroll down to learn more</p>
      <Link className="icon" smooth={true} to="about">
        <FaChevronCircleDown />
      </Link>
    </div>
  );
};

export default Hero;
