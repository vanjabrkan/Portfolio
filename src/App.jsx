import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroArea from "./components/HeroArea/HeroArea";
import FeatureArea from "./components/FeatureArea/FeatureArea";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroArea />
      <FeatureArea />
    </div>
  );
}

export default App;
