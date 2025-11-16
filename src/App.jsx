import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroArea from "./components/HeroArea/HeroArea";
import FeatureArea from "./components/FeatureArea/FeatureArea";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroArea />
      <FeatureArea />
      <Footer />
    </div>
  );
}

export default App;
