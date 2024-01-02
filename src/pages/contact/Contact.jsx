import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Contact.css";

function Contact() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <div>
      <div className="contact-hero">
        <div className="container">
          <h1 className="contact-title">
            Contact <span>Info</span>
          </h1>
        </div>
        <div className="container">
          <div className="contact">
            <div className="contact-information">
              <div className="phone">
                <i className="fa-solid fa-phone"></i>
                <NavLink to={"/"}>+998911192019</NavLink>
              </div>
              <div className="email">
                <i className="fa-solid fa-envelope"></i>
                <NavLink to="/">microsoftreact@gmail.com</NavLink>
              </div>
              <div className="address">
                <i className="fa-solid fa-location-dot"></i>
                <NavLink
                  to={
                    "https://www.google.com/maps/place/%D0%A2%D0%B5%D0%BB%D0%B8%D0%BC%D0%B8%D0%BD%D0%B3,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@40.616907,70.8795401,15z/data=!3m1!4b1!4m9!1m2!2m1!1sDangara+Teleming!3m5!1s0x38baea1b32b49583:0xdefcba72a09490a7!8m2!3d40.615787!4d70.8996924!16s%2Fg%2F1vv2qm9d?entry=ttu"
                  }
                >
                  Fergana, Dangara, Teleming
                </NavLink>
              </div>
              <div className="socials">
                <NavLink to={"https://github.com/microsoftreact"}>
                  <i className="fa-brands fa-github"></i>
                </NavLink>
                <NavLink to={"https://t.me/@microsoftreact"}>
                  <i className="fa-brands fa-telegram"></i>
                </NavLink>
                <NavLink to={"https://www.linkedin.com/in/microsoftdev/"}>
                  <i class="fa-brands fa-linkedin"></i>
                </NavLink>
              </div>
            </div>
            <form className="contact-form">
              <input type="text" placeholder="FirstName..." />
              <input type="text" placeholder="LastName..." />
              <input type="email" placeholder="Email..." />
              <input type="password" placeholder="Password..." />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Please fill in this space..."
              ></textarea>
              <button type="button">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
