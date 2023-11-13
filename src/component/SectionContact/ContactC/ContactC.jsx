import React from "react";
import "./ContactC.css";
import Boy from "../../../assets/01.jpg";
const ContactC = () => {
  return (
    <div className="contact-c">
      <span>Get In Touch</span>
      <div className="contact-c-content">
        <div className="contact-col1">
          <form action="">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <div className="checkbox">
              <input type="checkbox" />
              <p>
                By checking this box,you agree to the{" "}
                <span>Privacy Policy</span> and <span>Cookie Policy</span>.{" "}
              </p>
            </div>
            <button className="btn btn-primary">Send Message</button>
          </form>
        </div>

        <div className="contact-col2">
          <img src={Boy} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactC;
