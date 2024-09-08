import React from 'react'
import "./css/header.css";

const Header = () => {
  return (
    <div className='main-div'>
    <div className='header-div'>
      <div className='logo'>
        <img src="./logo 1.svg" alt="" />
        <img className='toggle' src="./Page-1.png" alt="" />
      </div>
      <div className='navbar '>
        <input type="text"    placeholder= '  Search your content or Canva’s' />
        <li style={{color:"#2EC6B8"}}>Editor tools <img src="./Vector (Stroke).png" alt="" /></li>
        <li>Templates <img src="./Group.png" alt="" /></li>
        <li>Custom order</li>
        <li>Price and plan</li>
      </div>
      <div className='notification'>
        <img className='noti-1' src="./notification 1.svg" alt="" />
        <img className='avtar'  src="./Avatar.png" alt="" />
      </div>

    </div>
    </div>
  )
}

export default Header