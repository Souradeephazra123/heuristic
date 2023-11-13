import React from "react";
import "./project.css";
import GoogleMaps from "../../../assets/google-maps-image.png";
import MLHunt from "../../../assets/ml101.jpg";
import Intelligent from "../../../assets/intelligent-retrieval-image.jpg";

import { FaGithub } from "react-icons/fa";
const project = () => {
  return (
    <div className="project" id="Project">
      <span className="pro-span1">Project</span>
      <span className="pro-span2">Check out our Projects </span>
      <div className="pro-content">
        <div className="pro-col">
          <img src={GoogleMaps} alt="" />
          <p>Hacking Google Maps</p>
          <p>loremdlaslfmlsdmlmaslmldflkdmlsll</p>
          <div className="logo">
            <FaGithub style={{ width: "20px", height: "auto" }} />
          </div>
        </div>

        <div className="pro-col">
          <img src={MLHunt} alt="" />

          <p>Machine Learning 101</p>
          <p>loremdlaslfmlsdmlmaslmldflkdmlsll</p>
          <div className="logo">
            <FaGithub style={{ width: "20px", height: "auto" }} />
          </div>
        </div>

        <div className="pro-col mob-col">
          <img src={Intelligent} alt="" />
          <p>Intelligent Retrieval</p>
          <p>loremdlaslfmlsdmlmaslmldflkdmlsll</p>
          <div className="logo">
            <FaGithub style={{ width: "20px", height: "auto" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default project;
