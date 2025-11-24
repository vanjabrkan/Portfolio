import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import CV from "./Pages/CV.jsx";
import Contact from "./Pages/Contact.jsx";
import Login from "./pages/Login.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
