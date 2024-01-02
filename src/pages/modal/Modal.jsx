import React, { useEffect } from "react";
import "./Modal.css";

function Modal({ data }) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <div className="cardModal">
      <div className="container">
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
        <div className="total">
          <span>Total Price of your Card</span>
          <span>$1000</span>
        </div>
      </div>
    </div>
  );
}

export default Modal;
