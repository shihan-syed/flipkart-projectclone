import React from 'react'
import CardOffers1 from '../CardOffers1/CardOffers1'
import CardOffers2 from '../CardOffers2/CardOffers2'
import { Header } from '../Header/Header'
import SliderBanner from '../SliderBanner/SliderBanner'
import TopOffers from '../TopOffers/TopOffers'

function Home() {
  return (
    <div className='bg-h'>
        <Header/>
        <SliderBanner/>
        <CardOffers1/>
        <TopOffers/>
        <CardOffers2/>

    </div>
  )
}

export default Home