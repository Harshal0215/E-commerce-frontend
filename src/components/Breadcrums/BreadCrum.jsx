import React from 'react'
import './breadcrum.css'
import arrow from '../../assets/breadcrum_arrow.png'

function BreadCrum(props) {
    const {product} = props;
  return (
    <div className='BreadCrum'>
        HOME <img src={arrow} alt="" /> SHOP <img src={arrow} alt="" /> {product.category.toUpperCase()}S <img src={arrow} alt="" /> {product.name}
    </div>
  )
}

export default BreadCrum