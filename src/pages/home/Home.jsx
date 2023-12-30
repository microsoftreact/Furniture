import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <div className="home">
      {/* HERO CONTENT */}
      <div className="home-hero">
        <video autoPlay muted loop playsInline className="back-video">
          <source src="video/HomePage.mp4" type="video/mp4" />
        </video>
        <div className="container">
          <div className="hero-content">
            <h1>Your Best Value Products</h1>
            <p>
              People have been using natural objects, such as tree stumps, rocks
              and moss, as furniture since the beginning of human civilization
              and continues today in some households/campsites. Archaeological
              research shows that from around 30,000 years ago, people started
              to construct and carve their own furniture, using wood, stone, and
              animal bones. Early furniture from this period is known from
              artwork such as a Venus figurine found in Russia.
            </p>
            <button>SHOP NOW</button>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT*/}
      <main>
        <div className="home-main">
          <div className="container">
            <div className="card-title">
              <h1>Get some Inspiration from our refreshing ideas</h1>
            </div>
            <div className="cards">
              <div className="card">
                <img src="cardImg/sunny Days.png" alt="" />
                <h3>Sunny Days</h3>
                <NavLink to={"/"}>Shop Now</NavLink>
              </div>
              <div className="card">
                <img src="cardImg/comfy bedcovers.png" alt="" />
                <h3>Comfy Bedcovers</h3>
                <NavLink to={"/"}>Shop Now</NavLink>
              </div>
              <div className="card">
                <img src="cardImg/statement pieces.png" alt="" />
                <h3>Statement pieces</h3>
                <NavLink to={"/"}>Shop Now</NavLink>
              </div>
              <div className="card">
                <img src="cardImg/spring sofas.png" alt="" />
                <h3>Spring Sofas</h3>
                <NavLink to={"/"}>Shop Now</NavLink>
              </div>
            </div>
            <div className="card-title">
              <h1>Looking for What’s New in Store?</h1>
            </div>
            <div className="cards">
              <div className="card card-two">
                <img src="cardImg/grey sofa.png" alt="" />
                <h3>Home for Designer Sectionals</h3>
                <p>
                  The product variations presented reflect our Designers'
                  Choices. We have over 100 materials and finishes available to
                  customise your pieces.
                </p>
                <NavLink to={"/"}>Take a look</NavLink>
              </div>
              <div className="card card-two">
                <img src="cardImg/portrets.png" alt="" />
                <h3>Bring in Bright Dressers</h3>
                <p>
                  The product variations presented reflect our Designers'
                  Choices. We have over 100 materials and finishes available to
                  customise your pieces.
                </p>
                <NavLink to={"/"}>Take a look</NavLink>
              </div>
              <div className="card card-two">
                <img src="cardImg/upgrade.png" alt="" />
                <h3>Upgrade your Rugs</h3>
                <p>
                  The product variations presented reflect our Designers'
                  Choices. We have over 100 materials and finishes available to
                  customise your pieces.
                </p>
                <NavLink to={"/"}>Take a look</NavLink>
              </div>
            </div>
            <div className="action">
              <div className="section-one">
                <img src="cardImg/action.png" alt="" />
              </div>
              <div className="section-two">
                <h1>Clearance Sale</h1>
                <h2>Upto 60% off</h2>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
