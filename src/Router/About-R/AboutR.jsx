import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import Hero from "../../component/SectionAbout/Hero/HeroR";
import Footer from "../../component/Footer/Footer";
import Endpoint from "../../component/Endpoint/Endpoint";
import AboutA from "../../component/SectionAbout/AboutA/AboutA";
import Welcome from "../../component/SectionAbout/Welcome/Welcome";
import Challenges from "../../component/SectionAbout/Challenges/Challenges";
const AboutR = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutA />
      <Welcome />
      <Challenges />
      <Footer />
      <Endpoint />
    </div>
  );
};

export default AboutR;
