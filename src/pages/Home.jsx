import React from 'react'
import Contact from '../components/Contact'
import Channel from '../components/Channel'
import Slider from './Slider'
import TimelineSlider from '../components/TimelineSlider'
import Sensing_Matter from '../components/Sensing_Matter'
import Products from '../components/Products'
import ScrollToTop from "react-scroll-to-top";
import SliderTest from '../components/SliderTest'
import TestimonialCarousel from '../components/SwipeSlider'
// import MilesightCarousel from '../components/MilesightCarousel'

const Home = () => {
  return (
    <div className=''>
   {/* <MilesightCarousel/> */}
   <SliderTest/>
   {/* <TestimonialCarousel/> */}
      <Products/>
      <Sensing_Matter/>
      <TimelineSlider/>
      <Slider/>
      <Channel/>
      <Contact/>
    </div>
  )
}

export default Home
