import React from "react";
import "./featurearea.css";
import feature1 from "../../assets/feature1.jpg";
import feature2 from "../../assets/feature2.jpg";
import feature3 from "../../assets/feature3.jpg";

function FeatureArea() {
  const items = [
    {
      id: 1,
      title: "Test Automation & Quality Engineering",
      text: "I design and maintain robust automated test frameworks (UI, API, and E2E) that ensure fast feedback, reliable releases, and long-term maintainability.",
      image: feature1,
    },
    {
      id: 2,
      title: "Frontend Development with a QA Mindset",
      text: "I build and test modern frontend applications, writing clean, testable code while catching issues early through thoughtful architecture and automation.",
      image: feature2,
    },
    {
      id: 3,
      title: "Quality & Process Innovation",
      text: "I leverage modern tools and best practices to improve testing workflows, streamline development processes, and ensure high-quality, reliable web applications.",
      image: feature3,
    },
  ];

  return (
    <div className="featureAreaRoot">
      <div className="featureAreaConteiner">
        <div className="featureAreaHeader">What I do: </div>
        <div className="featureAreaItems">
          {items.map((item) => (
            
              <FeatureItem
               key={item.id}
                title={item.title}
                text={item.text}
                image={item.image}
              />
              
        
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeatureArea;

function FeatureItem({ title, text, image }) {
  return (
    <div className="LevelItemRoot">
      <div className="LevelItemConteiner">
        <div className="LevelItemImageConteiner">
          <img className="LevelItemImage" src={image} alt={image} />
        </div>
        <div className="LevelItemTitle">{title}</div>
        <div className="LevelItemText">{text}</div>
      </div>
    </div>
  );
}
