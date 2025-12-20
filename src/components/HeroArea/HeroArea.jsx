import React from "react";
import "./heroarea.css";
import Vanja from "../../assets/Vanja.jpg";

function HeroArea(props) {
  return (
    <div>
      <div className="heroAreaRoot">
        <LeftArea />
        <RightArea />
      </div>
    </div>
  );
}

export default HeroArea;

function LeftArea() {
  const subHeader = ` Hello, I'm Vanja,\n a Test Automation Developer with Frontend expertise.`;
  const subDescription = `Welcome to my portfolio. I combine deep QA experience with developer skills to build reliable, high-quality software.`;
  //
  return (
    <div className="leftAreaRoot">
      <div className="leftAreaSubConteiner">
        <div className="leftAreaSubHeader" style={{ whiteSpace: 'pre-line' }}>{subHeader}</div>
        <div className="leftAreaSubDescription">{subDescription}</div>
        <div className="contactButton">
          <button className="heroButton">Get in touch</button>
        </div>
      </div>
    </div>
  );
}

function RightArea() {
  return (
  <div className="rightAreaRoot">
      <div className="rightAreaConteiner">
    <img className="rightAreaImage" src={Vanja} alt="my-picture" />
  </div>
  </div>

  );
}
