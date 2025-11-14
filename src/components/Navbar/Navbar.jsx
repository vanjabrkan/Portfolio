import react from "react";
import "./navbar.css";
import logo from "../../assets/logo.jpg";

function Header(props) {
  return (
    <div className="headerAreaRoot">
      <Logo />
      <MainMenu />
      <LoginButton />
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
  return (
    <div className="mainMenuRootConteiner">
      {menuItems.map((menuItem, index) => (
        <div key={index} className="singleMenuItem">
          {menuItem}
        </div>
      ))}
    </div>
  );
}

function LoginButton() {
  return <div className="loginButtonRootConteiner">
    <div className="loginButton">Login</div></div>;
}
