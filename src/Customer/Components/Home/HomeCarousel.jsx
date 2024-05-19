import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import { useNavigate } from 'react-router-dom'

const carouselData = [
  {
      image:"https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/0/10_5.jpg",
      path:"/women/clothing/lengha_choli"
  },
  {
      image:"https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/2/12_4.jpg",
      path:"/women/clothing/women_dress"
  },
  {
      image:"https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/9/_/9_8.jpg",
      path:"/women/clothing/women_dress"
  },
  {
      image:"https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/1/11_4.jpg",
      path:"/women/clothing/women_saree"
  }

];

const handleDragStart = (e) => e.preventDefault();

function HomeCarousel() {
  const navigate = useNavigate();
  const item = carouselData.map((item) => (
    <img
      className="cursor-pointer"
      onClick={() => navigate(item.path)}
      src={item.image}
      alt=""
      onDragStart={handleDragStart}
      role="presentation"
    />
  ));
  return (
    <AliceCarousel
      mouseTracking
      items={item}
      autoPlay
      infinite
      autoPlayInterval={2000}
      disableButtonsControls
    />
  )
}

export default HomeCarousel

//TODO: change data