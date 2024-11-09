import React, { useContext } from 'react'
import './cartItems.css'
import remove from '../assets/cart_cross_icon.png'
import { ShopContext } from '../context/ShopContext'

function CartItems() {
    const {all_products, cartItems, removeFromCart, getTotalCartAmount} = useContext(ShopContext)
  return (
    <div className='CartItems'>
        <div className="main">
            <p>Procducts</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quatity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_products.map((e)=>{
            if(cartItems[e.id] > 0){
                return <div>
                <div className="format main">
                    <img src={e.image} className='cartIconProcuctIcon' alt="" />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='quantity'>{cartItems[e.id]}</button>
                    <p>${e.new_price * cartItems[e.id]}</p>
                    <img className='removI' src={remove} onClick={()=>{removeFromCart(e.id)}} alt="" />
                </div>
                <hr />
            </div>
            } return null;
        })}
        <div className="cart-items-down">
            <div className="total">
                <h1>Cart total</h1>
                <div className="o">
                    <div className="total-items">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="total-items">
                        <p>Shipping fees</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="total-items">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>Proceed to checkout</button>
            </div>
            <div className="promo">
                <p>Enter PROMO code</p>
                <div className="promo-box">
                    <input type="text" placeholder='promocode' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems