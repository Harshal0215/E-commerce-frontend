import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import cartIcon from '../../assets/cart_icon.png'
import './navbar.css'
import { ShopContext } from '../../context/ShopContext'

export const Navbar = () => {
  const [menu , setMenu] = useState('shop')
  const {getTotalCartItems} = useContext(ShopContext)
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>Shopper</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><NavLink to={'/'}>Shop</NavLink> {menu==='shop'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('mens')}}><NavLink to={'/mens'}>Men</NavLink>{menu==='mens'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('women')}}><NavLink to={'/women'}>Women</NavLink>{menu==='women'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('kids')}}><NavLink to={'/kids'}>Kids</NavLink>{menu==='kids'?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <NavLink to={'/login'}><button className='mm'>Login</button></NavLink>
            <NavLink to={'/cart'}><img style={{filter:'invert()'}}  src={cartIcon} alt="" /></NavLink>
            <div className='cart-count'>{getTotalCartItems()}</div>
        </div>
    </div>
  )
}
