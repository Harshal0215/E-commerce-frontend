import React, { useContext } from 'react'
import './shopcategory.css'
import { ShopContext } from '../context/ShopContext'
import dropdown from '../assets/dropdown_icon.png'
import Item from '../components/item/Item'

export const ShopCategory = (props) => {
  const {all_products} = useContext(ShopContext)
  return (
    <div className='ShopCategory'>
        <img className='banner-img' src={props.banner} alt="" />
        <div className="category-indexsort">
          <p><span>Showing 1-12 </span> of 20</p>
          <div className="category-sort">
            Sort by <img src={dropdown} alt="" />
          </div>
        </div>
        <div className="category-products">
          {all_products.map((item,i)=>{
            if (props.category===item.category){
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
          })}
        </div>
        <div className="loadmore">
          Explore more
        </div>
    </div>
  )
}
