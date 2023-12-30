import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-links">
              <NavLink to={"/"}>Living Room</NavLink>
              <NavLink to={"/"}>Bedroom</NavLink>
              <NavLink to={"/"}>Kitchen & Dining</NavLink>
              <div className="navbar-logo">
                <div className="navbarImg">
                  <img src="navbarImg/orange.png" alt="" />
                  <img src="navbarImg/green.png" alt="" />
                  <img src="navbarImg/purple.png" alt="" />
                </div>
                <h2>Maynooth</h2>
              </div>
              <NavLink to={"/"}>About</NavLink>
              <NavLink to={"/"}>Blog</NavLink>
              <NavLink to={"/"}>Support</NavLink>
            </div>
            <div className="footer-socials">
              <i class="fa-brands fa-google-plus-g"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-facebook-f"></i>
            </div>
            <div className="footer-author">
              <span>© 2010 — 2023</span>
              <span>Create website by Nodirbek Toshpulatov</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
