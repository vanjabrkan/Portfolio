import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroArea from "./components/HeroArea/HeroArea";
import FeatureArea from "./components/FeatureArea/FeatureArea";
import Footer from "./components/Footer/Footer";
import WaveShape from "./components/WaveShape/WaveShape";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroArea />
      <WaveShape color="#dfb0b0" flip bottomColor="#dfb0b0" className="wave-colorb"/>
      <FeatureArea />
      <WaveShape color="#dfb0b0" className="wave-color" />
      <Footer />
    </div>
  );
}

export default App;
