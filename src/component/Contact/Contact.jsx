import React from "react";
import "./Contact.css";
import { FaPhone } from "react-icons/fa";
import { FaVoicemail } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact-col-1">
          <div className="contact-content">
            <div>
              <h2>Get In Touch</h2>

              {/* <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perspiciatis expedita molestias sint sunt unde officia vel qui
                odit veritatis? Dolorum reprehenderit recusandae architecto quae
                vero! Itaque quis eum dolores cum!
              </p> */}
            </div>
            <div className="address">
              <p>23,Evergreen Terrace</p>
              <p>Springfield, 1203</p>
            </div>
            <div className="icons">
              <FaVoicemail style={{ marginRight: "1rem" }} />
              <p>support@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contact-col-2">
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
      </div>
    </div>
  );
};

export default Contact;
