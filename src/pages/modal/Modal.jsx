import React, { useEffect, useState } from "react";
import "./Modal.css";

function Modal({ card, setCard, handleChange }) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    card.map((item) => {
      ans += item.amount * item.price;
    });
    setPrice(ans);
  };

  const handleRemove = (id) => {
    const arr = card.filter((item) => item.id !== id);
    setCard(arr);
    item = "";
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <div className="cardModal">
      <div className="container">
        {card.map((item) => {
          return (
            <div className="modal" key={item.id}>
              <div className="card-img">
                <img src={item.image} alt="Bu yerda rasm bor" />
                <p>{item.name}</p>
              </div>
              <div className="btn-algorithm">
                <button
                  onClick={() => {
                    handleChange(item, +1);
                  }}
                >
                  +
                </button>
                <span>{item.amount}</span>
                <button
                  onClick={() => {
                    handleChange(item, -1);
                  }}
                >
                  -
                </button>
              </div>
              <div className="btn-remove">
                <span>${item.price}</span>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            </div>
          );
        })}
        <div className="total">
          <span>Total Price of your Card</span>
          <span>${price}</span>
        </div>
      </div>
    </div>
  );
}

export default Modal;
