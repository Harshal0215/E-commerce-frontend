import React from 'react'
import Hero from '../components/hero/Hero'
import Popular from '../components/popular/Popular'
import Offers from '../components/offers/Offers'
import NewCollections from '../components/collections/NewCollections'
import Newsletter from '../components/nerwsletter/Newsletter'

export const Shop = () => {
  return (
    <div style={{maxWidth:"95vw"}}>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <Newsletter/>
    </div>
  )
}
