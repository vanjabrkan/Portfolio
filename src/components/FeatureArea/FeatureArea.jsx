import React from "react";
import "./featurearea.css";
import feature1 from "../../assets/feature1.jpg";
import feature2 from "../../assets/feature2.jpg";
import feature3 from "../../assets/feature3.jpg";

function FeatureArea(props) {
  const items = [
    {
      id: 1,
      title: "Responsive",
      text: "I create easy-to-use and responsive sites that work across all devices.",
      image: feature1,
    },
    {
      id: 2,
      title: "Modern Technologies",
      text: "I use the latest web development tools and frameworks to ensure your website is up to date.",
      image: feature2,
    },
    {
      id: 3,
      title: "Custom Design",
      text: "Every website I create is tailored to fit the specific needs and goals of each project, providing a unique online experience.",
      image: feature3,
    },
  ];

  return (
    <div className="featureAreaRoot">
      <div className="featureAreaConteiner">
        <div className="featureAreaHeader">What I do: </div>
        <div className="featureAreaItems">
          {items.map((item, index) => (
            <div>
              <FeatureItem
                title={item.title}
                text={item.text}
                image={item.image}
              />
              <div />
            </div>
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
