import React from 'react'
import Contact from '../components/Contact'
import Channel from '../components/Channel'
import Slider from './Slider'
import TimelineSlider from '../components/TimelineSlider'
import Sensing_Matter from '../components/Sensing_Matter'
import Products from '../components/Products'
import HeroCarousel from '../components/Home/HeroCarousel'
// import MilesightCarousel from '../components/MilesightCarousel'

const Home = () => {
  return (
    <div className='w-full'>
<HeroCarousel/>

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
