import React from "react";
import "./heroarea.css";

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
  const subHeader = ` Hello, I'm Vanja, a Web Developer`;
  const subDescription = `Welcome to my portfolio. I'm a web developer focused on building clean and functional websites.`;
  //
  return (
    <div className="leftAreaRoot">
      <div className="leftAreaSubConteiner">
        <div className="leftAreaSubHeader">{subHeader}</div>
        <div className="leftAreaSubDescription">{subDescription}</div>
        <div className="contactButton">
          <button className="heroButton">Get in touch</button>
        </div>
      </div>
    </div>
  );
}

function RightArea() {
  return <div className="rightAreaRoot">Right Area</div>;
}
