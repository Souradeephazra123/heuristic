import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import Hero from "../../component/Hero/Hero";
import Welcome from "../../component/SectionAbout/Welcome/Welcome";
import About from "../../component/About/About";
import Event from "../../component/Event/Event";
import Project from "../../component/SectionProject/Projects/project";
import Contact from "../../component/Contact/Contact";
import Team from "../../component/member/member";
import Footer from "../../component/Footer/Footer";
import Vacant1 from "../../component/Vacant1/Vacant1";
import Endpoint from "../../component/Endpoint/Endpoint";
import ProjectH from "../../component/ProjectH/ProjectH";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Welcome /> */}
      <About />
      <Vacant1 />
      {/* <Event /> */}
      {/* <Project /> */}
      {/* <Team /> */}
      {/* <Contact /> */}
      <ProjectH />
      <Footer />
      <Endpoint />
    </div>
  );
};

export default Home;
