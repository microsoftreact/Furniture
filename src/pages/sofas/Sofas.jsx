import React, { useEffect, useState } from "react";
import "./Sofas.css";
import { NavLink } from "react-router-dom";

function Sofas({card, setCard, data }) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // FILTER FUNCTION

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);

  const handlePriceChange = (event) => {
    const { value } = event.target;
    setMaxPrice(value);
  };

  const filterProduct = data.filter(
    (info) => info.price >= minPrice && info.price <= maxPrice
  );

  const addCard = (id)=>{
    const product = filterProduct.filter((item)=>{
      return item.id == id
    })
    setCard([...card, product[0]])
  }

  return (
    <main>
      <div className="sofas">
        <div className="sofas-title">
          <div className="container">
            <h1 className="sofas-title-text">Sofas Shop</h1>
          </div>
        </div>
        <div className="container">
          <div className="sofas-content">
            <div className="sofas-filter-menu">
              <div className="sofas-filter-menu-title">
                <h3>Filter by Price:</h3>
              </div>
              <form className="sofas-filter-menu-price">
                <label for="customRange1">
                  ${minPrice}-${maxPrice}
                </label>
                <input
                  className="range"
                  type="range"
                  min="0"
                  max="2000"
                  id="customRange1"
                  value={maxPrice}
                  onChange={handlePriceChange}
                />
              </form>
            </div>
            <div className="sofas-cards">
              {filterProduct.map((res, index) => {
               
                return (
                  <div className="sofas-card">
                    <div className="sofas-card-section-one">
                      <img src={res.image} alt="" />
                    </div>
                    <div className="sofas-card-section-two">
                      <div className="section-two-cost">
                        <h4>{res.name}</h4>
                        <span>${res.price}</span>
                      </div>
                      <p>{res.text}</p>
                      <div className="section-two-stars">
                        <i className={res.rating}></i>
                        <i className={res.rating}></i>
                        <i className={res.rating}></i>
                        <i className={res.halfrating}></i>
                        <i className="fa-regular fa-star"></i>
                      </div>
                      <button
                        onClick={() => {
                          addCard(res.id);
                        }}
                      >
                        Choose options
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Sofas;
