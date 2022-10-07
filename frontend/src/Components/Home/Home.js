import React from 'react'
import Addproduct from '../Add Product/addproduct'
import CardOffers1 from '../CardOffers1/CardOffers1'
import CardOffers2 from '../CardOffers2/CardOffers2'
import CardOffers3 from '../CardOffers3/CardOffers3'
import { Header } from '../Header/Header'
import SliderBanner from '../SliderBanner/SliderBanner'
import TopOffers from '../TopOffers/TopOffers'

function Home() {
  return (
    <div className='bg-h'>
        <Header/>
        <SliderBanner/>
        <TopOffers/>
        <CardOffers1/>
        <CardOffers2/>
        <CardOffers3/>
        <Addproduct/>

    </div>
  )
}

export default Home