import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


function Header(props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="headerAreaRoot">
      <Logo />
      <button id="open-sidebar" className="burgerMenu" onClick={() => setIsSidebarOpen(true)}>
        <FontAwesomeIcon icon={faBars} size="lg" />
      </button>
      <MainMenu isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}/>
    </div>
  );
}

export default Header;

function Logo() {
  return (
    <div className="logoRootConteiner">
      <img src={logo} alt="Logo" className="logoImage" />
    </div>
  );
}

function MainMenu({ isOpen, onClose }) {
  const menuItems = ["Home", "Portfolio", "Contact"];
  const loginItem = "Login";
  return (
      <div className={`mainMenuRootConteiner ${isOpen ? "show" : ""}`}>
      <div id="close-sidebar" onClick={onClose}><FontAwesomeIcon icon={faXmark} /></div>
      
      
      {menuItems.map((menuItem, index) => (
        <div key={index} className="singleMenuItem">
          {menuItem}
        </div>
      ))}
      <div className="singleMenuItem loginMenuItem">{loginItem}</div>
    </div>
  );
}
