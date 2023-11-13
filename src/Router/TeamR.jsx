import React from "react";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";
import Endpoint from "../component/Endpoint/Endpoint";
import WelcomeT from "../component/SectionTeam/WelcomT/WelcomeT";
import TeamS from "../component/SectionTeam/TeamS/Teams";
const TeamR = () => {
  return (
    <div>
      <Navbar />
      <WelcomeT />
      <TeamS />
      <Footer />
      <Endpoint />
    </div>
  );
};

export default TeamR;
