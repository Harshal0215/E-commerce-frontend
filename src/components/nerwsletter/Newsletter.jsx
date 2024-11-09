import React from 'react'
import './newsLetter.css'

function Newsletter() {
  return (
    <div className='newsletter'>
        <h1>Get Exculsive Offers on Your Email...</h1>
        <p>Subscribe to our newsletter to stay Updated</p>
        <div >
            <input className='imp' type="email" placeholder='enter your email' name="" id="" />
            <button id='mm'>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter