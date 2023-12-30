import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  // Eventni qo'shish
  window.addEventListener("scroll", handleScroll);

  const location = useLocation();

  const currentPath = location.pathname;
  console.log(currentPath);
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
            <h2>Maynooth</h2>
          </div>
          <div className="navbar-links">
            <ul>
              <li>
                <NavLink to={"/"}>Bedroom</NavLink>
              </li>
              <li>
                <NavLink to={"/livingroom"}>Living Room</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Kitchen & Dining</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-socials">
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-solid fa-user"></i>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
