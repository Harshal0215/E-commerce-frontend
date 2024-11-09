import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import BreadCrum from '../components/Breadcrums/BreadCrum'
import ProductDisplay from '../components/prodisplay/ProductDisplay'
import { Description } from '../components/description/Description'
import { RelatedProducts } from '../components/relatedProducts/RelatedProducts'

export const Products = () => {
  const {all_products} = useContext(ShopContext)
  const {productId} = useParams()
  const product = all_products.find((e)=> e.id === Number(productId))
  return (
    <div >
      <BreadCrum product={product}/>
      <ProductDisplay product={product}/>
      <Description/>
      <RelatedProducts/>
    </div>
  )
}
