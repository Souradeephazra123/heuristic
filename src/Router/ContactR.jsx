import React from "react";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";
import Endpoint from "../component/Endpoint/Endpoint";
import WelcomeC from "../component/SectionContact/WelcomeC/WelcomeC";
import ConnectC from "../component/SectionContact/ConnectC/ConnectC";
import ContactC from "../component/SectionContact/ContactC/ContactC";
const ContactR = () => {
  return (
    <div>
      <Navbar />
      <WelcomeC />
      <ConnectC />
      <ContactC />
      <Footer />
      <Endpoint />
    </div>
  );
};

export default ContactR;
