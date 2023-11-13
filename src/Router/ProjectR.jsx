import React from "react";
import Project from "../component/SectionProject/Projects/project";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";
import Endpoint from "../component/Endpoint/Endpoint";
import WelcomeP from "../component/SectionProject/WelcomeP/WelcomeP";
const ProjectR = () => {
  return (
    <div>
      <Navbar />
      <WelcomeP />
      <Project />
      <Footer />
      <Endpoint />
    </div>
  );
};

export default ProjectR;
