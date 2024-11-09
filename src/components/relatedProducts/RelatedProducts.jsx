import React from 'react'
import Item from '../item/Item'
import './relatedProducts.css'
import data_products from '../../assets/data'

export const RelatedProducts = () => {
  return (
    <div className='RelatedProducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="related-items">
            {data_products.map((item, key) =>{ return <Item key={key} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>})}
        </div>
    </div>
  )
}
