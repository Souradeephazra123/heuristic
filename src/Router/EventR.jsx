import React from "react";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";
import Endpoint from "../component/Endpoint/Endpoint";
import WelcomeE from "../component/SectionEvent/WelcomeE/WelcomeE";
import UpcomingE from "../component/SectionEvent/Upcoming/UpcomingE";
import SponsorE from "../component/SectionEvent/SponsorE/SponsorE";
const EventR = () => {
  return (
    <div>
      <Navbar />
      <WelcomeE />
      <UpcomingE />
      <SponsorE />
      <Footer />
      <Endpoint />
    </div>
  );
};

export default EventR;
