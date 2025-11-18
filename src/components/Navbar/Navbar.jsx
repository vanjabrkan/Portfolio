import react from "react";
import "./navbar.css";
import logo from "../../assets/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header(props) {
  return (
    <div className="headerAreaRoot">
      <Logo />
      <div className="burgerMenu">
        <FontAwesomeIcon icon={faBars} size="lg" />
      </div>
      <MainMenu />
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

function MainMenu() {
  const menuItems = ["Home", "Portfolio", "Contact"];
  const loginItem = "Login";
  return (
    <div className="mainMenuRootConteiner">
      {menuItems.map((menuItem, index) => (
        <div key={index} className="singleMenuItem">
          {menuItem}
        </div>
      ))}
      <div className="singleMenuItem loginMenuItem">{loginItem}</div>
    </div>
  );
}
