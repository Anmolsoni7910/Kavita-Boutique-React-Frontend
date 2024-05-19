import React from 'react'
import HomeCarousel from './HomeCarousel'
import HomeBannerLToR from './HomeBannerLToR'
import HomeProductSection from './HomeProductSection'
import HomeBannerRToL from './HomeBannerRToL'
import HomeFAQs from './HomeFAQs'
import HomeTop from './HomeTop'
import {sareePage1} from '../../../Data/Saree/saree.js'
import {kurtaPage1} from '../../../Data/kurta/kurtas.js'
import {custom} from '../../../Data/CustomProduct/customProduct.js'
import HomeAddressCard from './HomeAddressCard.jsx'


function Home() {
  return (
    <>
        {/* <HomeCarousel/> */}
        <HomeTop/>
        <HomeBannerLToR/>
        <HomeProductSection data={sareePage1} sectionName={"Saree"}/>
        <HomeProductSection data={kurtaPage1} sectionName={"Kurta"}/>
        <HomeBannerRToL/>
        <HomeProductSection data={custom} sectionName={"Custom Product"}/>
        <HomeAddressCard/>
        <HomeFAQs/>
    </>
  )
}


export default Home