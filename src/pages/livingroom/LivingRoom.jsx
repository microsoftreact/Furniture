import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./LivingRoom.css";
import Slider from "../slider/Slider";

function LivingRoom() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <main>
      <div className="livingroom-hero">
        <video
          autoPlay
          muted
          playsInline
          loop
          className="livingroom-back-video"
        >
          <source src="video/LivingRoom.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="livingroom-content">
        <div className="container">
          <div className="livingroom-title">
            <h1>LIVING ROOM</h1>
          </div>
          <div className="livingroom-cards">
            <div className="livingroom-card">
              <img src="livingroom/sofa.png" alt="" />
              <div className="livingroom-card-bottom">
                <NavLink to={"/sofas"}>Sofas</NavLink>
              </div>
            </div>
            <div className="livingroom-card">
              <img src="livingroom/coffee table.png" alt="" />
              <div className="livingroom-card-bottom">
                <NavLink to={"/"}>Coffee Tables</NavLink>
              </div>
            </div>
            <div className="livingroom-card">
              <img src="livingroom/combo sets.png" alt="" />
              <div className="livingroom-card-bottom">
                <NavLink to={"/"}>Combo Sets</NavLink>
              </div>
            </div>
            <div className="livingroom-card">
              <img src="livingroom/neck tables.png" alt="" />
              <div className="livingroom-card-bottom">
                <NavLink to={"/"}>Neck Tables</NavLink>
              </div>
            </div>
            <div className="livingroom-card">
              <img src="livingroom/rugs.png" alt="" />
              <div className="livingroom-card-bottom">
                <NavLink to={"/"}>Rugs</NavLink>
              </div>
            </div>
            <div className="livingroom-card">
              <img src="livingroom/decor.png" alt="" />
              <div className="livingroom-card-bottom">
                <NavLink to={"/"}>Decor</NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="livingroom-idea">
          <div className="container">
            <div className="livingroom-idea-title">
              <h1>Living Room Ideas</h1>
            </div>
            <div className="livingroom-idea-content">
              <div className="section-one">
                <img src="livingroom/livingroom idea.png" alt="" />
              </div>
              <div className="section-two">
                <h3>Feature that is amazing</h3>
                <p>
                  Every living room is unique, but they all have one thing in
                  common. They’re a place where memories are made. Families
                  spend the most time together in their living room.
                </p>
                <ul>
                  <li>Benefit of Feature</li>
                  <li>Benefit of Feature</li>
                  <li>Benefit of Feature</li>
                </ul>
                <button>Shop Living Room</button>
              </div>
            </div>
          </div>
        </div>

        {/* LIVINGROOM SLIDER */}
        <div className="container">
          <div className="slider-title">
            <h1>
              Most Popular on <span>Maynooth</span>
            </h1>
          </div>
          <Slider />
        </div>
      </div>
    </main>
  );
}

export default LivingRoom;
