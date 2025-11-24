import React from 'react'
import {Link} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import HeroArea from "../components/HeroArea/HeroArea";
import FeatureArea from "../components/FeatureArea/FeatureArea";
import Footer from "../components/Footer/Footer";
import WaveShape from "../components/WaveShape/WaveShape";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <HeroArea />
      <WaveShape color="#dfb0b0" flip bottomColor="#dfb0b0" />
      <FeatureArea />
      <WaveShape color="#dfb0b0"  bottomColor="#dfb0b0" className="wave-color wave-up" />
      <Footer />
    </div>
  )
}

export default Home
