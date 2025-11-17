import React from 'react';
import './footer.css';

function Footer ()  {
  return (
    <div className='FooterAreaRoot'>
   <FooterLinks />
      <div className='FooterText'>©2025 Vanja Brkan Stankic. All rights reserved.</div>
    </div>
  )
}

export default Footer

function FooterLinks() {
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

