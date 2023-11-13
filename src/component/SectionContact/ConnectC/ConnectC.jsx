import React from "react";
import "./ConnectC.css";
import { TfiEmail } from "react-icons/tfi";
import { PiMapPinFill } from "react-icons/pi";
import { FaFacebook, FaGithub } from "react-icons/fa";
const ConnectC = () => {
  return (
    <div className="connect-c">
      <span>connect</span>
      <div className="connect-content">
        <div className="connect-col">
          <PiMapPinFill style={{ fontSize: "120px" }} />
          <p>Address</p>
          <p>
            {" "}
            Indian Institute of Technology Mandi, Kamand, Himachal Pradesh,
            175075
          </p>
        </div>

        <div className="connect-col">
          <TfiEmail style={{ fontSize: "120px" }} />
          <p>Email</p>
          <p>heuristics@students.iitmandi.ac.in</p>
        </div>

        <div className="connect-col">
          <FaFacebook style={{ fontSize: "120px" }} />
          <p>Facebook</p>
          <p>IIT Mandi Facebook Page</p>
        </div>

        <div className="connect-col">
          <FaGithub style={{ fontSize: "120px" }} />
          <p>Github</p>
          <p>IIT Mandi Github Page</p>
        </div>
      </div>
    </div>
  );
};

export default ConnectC;
