import React from 'react';
import './footer.sass';

const Footer = () => {
   return (
      <footer className="footer-wrapper">
         <div className="footer-content">
            <div className="footer-copyright-info">
               <span>&reg;</span>
               <span>2016 Dirty Dogs all rights reserved</span>
            </div>
            <div className="footer-contacts-info">
               <span>274 Marconi Blvd. Columbus, Ohio 43215</span>
               <span>614.538.0095</span>
               <span>Contact Us</span>
            </div>
         </div>
      </footer>
   )
};

export default Footer;
