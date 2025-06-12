import React from 'react'
import Contact from '../components/Contact'
import Channel from '../components/Channel'
import Slider from './Slider'
import TimelineSlider from '../components/TimelineSlider'
import Sensing_Matter from '../components/Sensing_Matter'
import Products from '../components/Products'
import ScrollToTop from "react-scroll-to-top";
const Home = () => {
  return (
    <div className=''>
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
