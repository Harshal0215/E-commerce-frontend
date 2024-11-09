import React from 'react'
import './popular.css'
import dataproducts from '../../assets/data'
import Item from '../item/Item'

function Popular() {
  return (
    <div className='popular'>
<h1>POPULAR IN WOMEN</h1>
<hr />
<div className="popular-item">
    {dataproducts.map((item,id)=>{
        return <Item key={id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
    })}
</div>
    </div>
  )
}

export default Popular