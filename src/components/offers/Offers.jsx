import React from 'react'
import './offers.css'
import exclusiveimg from '../../assets/exclusive_image.png'

function Offers() {
  return (
    <div className='offers'>
        <div className="left">
            <h1>Exclusive</h1>
            <h2>Only on best Sellers Products</h2>
            <button>Ckeck now</button>
        </div>
        <div className="right">
            <img src={exclusiveimg} alt="" />
        </div>
    </div>
  )
}

export default Offers