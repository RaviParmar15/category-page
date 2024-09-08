import React from "react";
import "./css/cart.css";
import api from "../api.json"


const Cart = () => {
  return (
    <div className="main-cart-box">
      {api.map((ele)=>{
        return(
          <div>
            <div className="cart">
        <img src={ele.img_url} alt="" />
        <h3>{ele.name}</h3>
        <h6>Invitation Insta story</h6>
      </div>

          </div>
        )
      })}
      
      {/* <div className="cart">
        <img src="./2 11 (1).png" alt="" />
        <h3>Sangeet Invites</h3>
        <h6>Invitation Insta story</h6>
      </div>
      <div className="cart">
        <img src="./2 11 (3).png" alt="" />
        <h3>Sangeet Invites</h3>
        <h6>Invitation Insta story</h6>
      </div>
      <div className="cart">
        <img src="./2 11 (4).png" alt="" />
        <h3>Sangeet Invites</h3>
        <h6>Invitation Insta story</h6>
      </div>
      <div className="cart">
        <img src="./2 11.png" alt="" />
        <h3>Sangeet Invites</h3>
        <h6>Invitation Insta story</h6>
      </div>
      <div className="cart">
        <img src="./2 11 (5).png" alt="" />
        <h3>Sangeet Invites</h3>
        <h6>Invitation Insta story</h6>
      </div> */}
     
    </div>
  );
};

export default Cart;
