import React from "react";
import "./heroarea.css";
import Vanja from "../../assets/Vanja.jpg";
import { useNavigate } from "react-router-dom";


function HeroArea() {
  return (

      <div className="heroAreaRoot">
        <LeftArea />
        <RightArea />

    </div>
  );
}

export default HeroArea;

function LeftArea() {
    const navigate = useNavigate();
  const subHeader = ` Hello, I'm Vanja,\n a Test Automation Developer with Frontend expertise.`;
  const subDescription = `Welcome to my portfolio. I combine deep QA experience with developer skills to build reliable, high-quality software.`;
  //
  return (
    <div className="leftAreaRoot">
      <div className="leftAreaSubContainer">
        <div className="leftAreaSubHeader" style={{ whiteSpace: 'pre-line' }}>{subHeader}</div>
        <div className="leftAreaSubDescription">{subDescription}</div>
        <div className="contactButton">
          <button className="heroButton" onClick={() => navigate("/contact")}>Get in touch</button>
        </div>
      </div>
    </div>
  );
}

function RightArea() {
  return (
  <div className="rightAreaRoot">
      <div className="rightAreaContainer">
    <img className="rightAreaImage" src={Vanja} alt="my-picture" />
  </div>
  </div>

  );
}
