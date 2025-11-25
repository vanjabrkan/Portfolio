import React from 'react'
import HeroArea from "../components/HeroArea/HeroArea";
import FeatureArea from "../components/FeatureArea/FeatureArea";
import WaveShape from "../components/WaveShape/WaveShape";

const Home = () => {
  return (
    <div className="Home">
      <HeroArea />
      <WaveShape color="#dfb0b0" flip bottomColor="#dfb0b0" />
      <FeatureArea />
      <WaveShape color="#dfb0b0"  bottomColor="#dfb0b0" className="wave-color wave-up" />
    </div>
  )
}

export default Home
