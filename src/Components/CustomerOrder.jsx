import React from "react";
import "./css/customerOrder.css";

const CustomerOrder = () => {
  return (
    <div className=" margin-tops ">
      <div className="cus-order ">
        <div className="container">
        <div className="order-1">
          <h1>Do You Want to Make Custom Caricature?</h1>
          <p>
            Create personalized caricatures that capture your unique features
            with a touch of humor and creativity. Perfect for gifts, special
            occasions, or simply adding a fun twist to your portraits!
          </p>
          <button>Custome Order Now</button>
        </div>
        <div className="order-2">
            <img src="./Group 36646.png" alt="" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default CustomerOrder;
