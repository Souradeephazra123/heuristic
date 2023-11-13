import React, { useState, useEffect } from "react";
import "./Navbar.css";
import HeuristicDark from "../../assets/logo21.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [clicked, setClick] = useState(false);
  const handleClick = () => setClick(!clicked);
  return (
    <div className="navbar" id="navbar">
      <div className="logo">
        <img src={HeuristicDark} alt="" />
      </div>

      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        <NavLink className="nav-item">KamandPrompt</NavLink>
        <NavLink to='/' className="nav-item">Home</NavLink>
        <NavLink to="/about" className="nav-item">About</NavLink>
        <NavLink to="/event" className="nav-item">Event</NavLink>
        <NavLink to="/project" className="nav-item">Project</NavLink>
        <NavLink to="/team" className="nav-item">Team</NavLink>
        <NavLink to="/contact" className="nav-item">Contact</NavLink>
      </ul>
      <div className="humberger" onClick={handleClick}>
        {clicked ? (
          <FaTimes size={20} style={{ color: "#ffffff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#ffffff" }} />
        )}
      </div>
      <Link to="navbar" smooth={true}>
        <BsFillArrowUpCircleFill
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            color: "black",
            fontSize: "30px",
          }}
        />
      </Link>
    </div>
  );
};

export default Navbar;
