import React from 'react'
import './footer.css'
import footerlogo from '../../assets/logo_big.png'
import instaicon from '../../assets/instagram_icon.png'
import pintresticon from '../../assets/pintester_icon.png'
import whatappicon from '../../assets/whatsapp_icon.png'

export const Footer = () => {
  return (
    <div className='footer'>
       <div className="footer-logo">
        <img src={footerlogo} alt="" />
        <p>SHOPPER</p>
    </div>
    <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
    <div className="social-icons">
        <div className="footer-icons-con">
            <img src={instaicon} alt="" />
        </div>
        <div className="footer-icons-con">
            <img src={pintresticon} alt="" />
        </div>
        <div className="footer-icons-con">
            <img src={whatappicon} alt="" />
        </div>
    </div>
    <div className="footer-copyright">
        <hr />
        <p>CopyRight @ 2024 - All rights reserved</p>
    </div>
        </div> 
  )
}
