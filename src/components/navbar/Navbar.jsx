import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar({ size, modal, setModal }) {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <nav>
      <div className={scroll ? "navbar active" : "navbar"}>
        <div className="container">
          <div className="navbar-logo">
            <div className="navbarImg">
              <img src="navbarImg/orange.png" alt="" />
              <img src="navbarImg/green.png" alt="" />
              <img src="navbarImg/purple.png" alt="" />
            </div>
            <NavLink to={"/"}>
              <h2>Maynooth</h2>
            </NavLink>
          </div>
          <div className="navbar-links">
            <div className={modal ? "modal hidden" : "modal"}>
              <i
                className="fas fa-close"
                onClick={() => {
                  setModal(true);
                }}
              ></i>
              <ul>
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/livingroom"}>Living Room</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-socials">
            <span className="navbar-socials-item">
              <i
                className="fa-solid fa-bars"
                onClick={() => {
                  setModal(false);
                }}
              ></i>
              <NavLink to={"/modal"}>
                <i className="fa-solid fa-cart-shopping"></i>
              </NavLink>
            </span>
            <span>{size}</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
