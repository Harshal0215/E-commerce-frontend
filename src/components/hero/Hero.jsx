import React from 'react'
import './hero.css'
import handicon from '../../assets/hand_icon.png'
import arrowicon from '../../assets/arrow.png'
import heroimg from '../../assets/hero_image.png'

function Hero() {
  return (
    <div className='hero'>
       <div className="left">
        <h1>New Arrivals</h1>
        <div >
        <div className="hero-hand">
            <p><h1>New Collections</h1></p>
            <img src={handicon} alt="" />
        </div>
            
            <p><h2>Collections for EveryOne</h2></p>
            </div>
        <div className="hero-latest-button">
            <div>Latest Collection</div>
            <img src={arrowicon} alt="" />
        </div>
        </div> 
       <div className="right">
        <img src={heroimg} alt="" />
        </div> 
    </div>
  )
}

export default Hero