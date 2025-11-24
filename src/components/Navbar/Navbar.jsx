import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="headerAreaRoot">
      <Logo />
      <BurgerMenu onOpen={() => setIsSidebarOpen(true)}/>
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

function BurgerMenu({ onOpen }) {
  return (
<button id="open-sidebar" className="burgerMenu" onClick={onOpen}>
        <FontAwesomeIcon icon={faBars} size="lg" />
      </button>
  );
}

function MainMenu({ isOpen, onClose }) {
  const menuItems = [
    { label: "Home", to: "/" },
    { label: "CV", to: "/cv" },
    { label: "Contact", to: "/contact" }
  ];
  const loginItem = "Login";
  return (
      <div className={`mainMenuRootConteiner ${isOpen ? "show" : ""}`}>
      <div id="close-sidebar" onClick={onClose}><FontAwesomeIcon icon={faXmark} /></div>
      
      
      {menuItems.map((menuItem, index) => (
        <Link
          key={index}
          to={menuItem.to}
          className="singleMenuItem"
          onClick={onClose}
        >
          {menuItem.label}
        </Link>
      ))}
            <Link to="/login" className="singleMenuItem loginMenuItem" onClick={onClose}>
        Login
      </Link>
    </div>
  );
}
