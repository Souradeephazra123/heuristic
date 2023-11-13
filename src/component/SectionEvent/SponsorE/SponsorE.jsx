import React from "react";
import "./SponsorE.css";
import Skype from "../../../assets/skype-logo.svg";
import Google from "../../../assets/google-2015.svg";
import Github from "../../../assets/github-logo-vector.svg";
import Invision from "../../../assets/Invision.svg";
import Spotify from "../../../assets/spotify-1.svg";

const SponsorE = () => {
  return (
    <div className="sponsor-e">
      <span>Sponsor</span>
      <p>
        Whether through commerce or just an experience to tell your brand's
        story, the time has come to start using development languages that fit
        your projects needs.
      </p>
      <div className="sponsor-content">
        <div className="sponsor-logo">
          <img src={Invision} alt="" />
        </div>
        <div className="sponsor-logo">
          <img src={Spotify} alt="" />
        </div>
        <div className="sponsor-logo">
          <img src={Skype} alt="" />
        </div>
        <div className="sponsor-logo">
          <img src={Github} alt="" />
        </div>
        <div className="sponsor-logo">
          <img src={Google} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SponsorE;
