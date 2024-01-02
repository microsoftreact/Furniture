import React, { useEffect } from "react";
import "./Modal.css";

function Modal({card,  data }) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  var total = 0
  return (
    <div className="cardModal">
      <div className="container">
        {card.map((item) => {
          total += item.price;

          return (
            <div className="modal">
              <div className="card-img">
                <img src="" alt="Bu yerda rasm bor" />
                <p>Lorem ipsum resta</p>
              </div>
              <div className="btn-algorithm">
                <button>+</button>
                <span>10</span>
                <button>-</button>
              </div>
              <div className="btn-remove">
                <span>500</span>
                <button>Remove</button>
              </div>
            </div>
          );
        })}
        <div className="total">
          <span>Total Price of your Card</span>
          <span>${total}</span>
        </div>
      </div>
    </div>
  );
}

export default Modal;
