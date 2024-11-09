import React, { useContext } from 'react'
import star from '../../assets/star_icon.png'
import stardull from '../../assets/star_dull_icon.png'
import './disp.css'
import { ShopContext } from '../../context/ShopContext'

function ProductDisplay(props) {
    const {product} = props
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='ProductDisplay'>
        <div className="lefty">
           <div className="inner-left">
           <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
           </div>
            <div className="disp-img">
                <img src={product.image} className='main-img' alt="" />
            </div>
        </div>
        <div className="right">
            <h1>{product.name}</h1>
            <div className='right-star'>
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={stardull} alt="" />
                <p>(122)</p>
            </div>
            <div className='right-prices'>
                <div className="price-old">${product.old_price}</div>
                <div className="price-new">${product.new_price}</div>
            </div>
            <div className="right-description">
                {product.name} is a 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur at sit a nobis quasi rem praesentium minus, quibusdam cumque laboriosam aut corrupti beatae explicabo!
            </div>
            <div className="right-size">
                <h1>Select Size</h1>
                <div className="right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}} id='one'>Add To Cart</button>
            <p className="right-category">
                <span>Category : </span>{product.category.toUpperCase()}S, T-Shirt, Suit
            </p>
            <p className="right-category">
                <span>Tags : </span>modern, latest, exclusive, trendy 
            </p>
        </div>
    </div>
  )
}

export default ProductDisplay