import React from "react";
import "./UpcomingE.css";
import Boy from "../../../assets/01.jpg";
import Logo from "../../../assets/logo-dark.png";
const UpcomingE = () => {
  return (
    <div className="upcoming-e">
      <span>Upcoming Events</span>
      <div className="upcoming-content">
        <div className="upcoming-col">
          <img src={Boy} alt="" />
          <p>Event Name</p>
          <div className="col-part">
            <div className="col-part-date">7thNov</div>
            <div className="col-part-logo">
              <img src={Logo} alt="" style={{ width: "70px" }} />
            </div>
          </div>
          <button className="upcoming-button">Show more</button>
        </div>

        <div className="upcoming-col">
          <img src={Boy} alt="" />
          <p>Event Name</p>
          <div className="col-part">
            <div className="col-part-date">7thNov</div>
            <div className="col-part-logo">
              <img src={Logo} alt="" style={{ width: "70px" }} />
            </div>
          </div>
          <button className="upcoming-button">Show more</button>
        </div>

        <div className="upcoming-col">
          <img src={Boy} alt="" />
          <p>Event Name</p>
          <div className="col-part">
            <div className="col-part-date">7thNov</div>
            <div className="col-part-logo">
              <img src={Logo} alt="" style={{ width: "70px" }} />
            </div>
          </div>
          <button className="upcoming-button">Show more</button>
        </div>
      </div>

      <span>Ongoing Events</span>
      <div className="upcoming-content">
        <div className="upcoming-col">
          <img src={Boy} alt="" />
          <p>Event Name</p>
          <div className="col-part">
            <div className="col-part-date">7thNov</div>
            <div className="col-part-logo">
              <img src={Logo} alt="" style={{ width: "70px" }} />
            </div>
          </div>
          <button className="upcoming-button">Show more</button>
        </div>

        <div className="upcoming-col">
          <img src={Boy} alt="" />
          <p>Event Name</p>
          <div className="col-part">
            <div className="col-part-date">7thNov</div>
            <div className="col-part-logo">
              <img src={Logo} alt="" style={{ width: "70px" }} />
            </div>
          </div>
          <button className="upcoming-button">Show more</button>
        </div>

        <div className="upcoming-col">
          <img src={Boy} alt="" />
          <p>Event Name</p>
          <div className="col-part">
            <div className="col-part-date">7thNov</div>
            <div className="col-part-logo">
              <img src={Logo} alt="" style={{ width: "70px" }} />
            </div>
          </div>
          <button className="upcoming-button">Show more</button>
        </div>
      </div>

      <span>Past Events</span>
      <div className="upcoming-content">
        <div className="upcoming-col">
          <img src={Boy} alt="" />
          <p>Event Name</p>
          <div className="col-part">
            <div className="col-part-date">7thNov</div>
            <div className="col-part-logo">
              <img src={Logo} alt="" style={{ width: "70px" }} />
            </div>
          </div>
          <button className="upcoming-button">Show more</button>
        </div>

        <div className="upcoming-col">
          <img src={Boy} alt="" />
          <p>Event Name</p>
          <div className="col-part">
            <div className="col-part-date">7thNov</div>
            <div className="col-part-logo">
              <img src={Logo} alt="" style={{ width: "70px" }} />
            </div>
          </div>
          <button className="upcoming-button">Show more</button>
        </div>

        <div className="upcoming-col">
          <img src={Boy} alt="" />
          <p>Event Name</p>
          <div className="col-part">
            <div className="col-part-date">7thNov</div>
            <div className="col-part-logo">
              <img src={Logo} alt="" style={{ width: "70px" }} />
            </div>
          </div>
          <button className="upcoming-button">Show more</button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingE;
