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
  const footerItems = ["Home", "Portfolio", "Contact"];
  return (
    <div className="FooterItemsRootConteiner">
      {footerItems.map((footerItem, index) => (
        <div key={index} className="singleFooterItem">
          {footerItem}
        </div>
      ))}
    </div>
  );
}

