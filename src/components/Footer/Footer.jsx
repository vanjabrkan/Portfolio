import React from 'react';
import './footer.css';
import { Link } from "react-router-dom";

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
  const footerItems = [
    { label: "Home", to: "/" },
    { label: "CV", to: "/cv" },
    { label: "Contact", to: "/contact" },
  ];
  return (
    <div className="FooterItemsRootConteiner">
      {footerItems.map((item, index) => (
        <Link  key={index} to={item.to} className="singleFooterItem">
          {item.label}
        </Link>
      ))}
    </div>
  );
}

