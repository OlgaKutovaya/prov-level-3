import React from 'react';
import './header-image-container.sass';

const HeaderImageContainer = () => {
   return (
      <div className="header-image-container">
         <div className="shadow-block-container">
            <div className="shadow-block"/>
         </div>
         <div className="top-row">
            <div>
               <img src="/images/header-img/photo-1.png" alt="hotdog image"/>
            </div>
            <div>
               <img src="/images/header-img/photo-2.png" alt="hotdog image"/>
            </div>
            <div>
               <img src="/images/header-img/photo-3.png" alt="hotdog image"/>
            </div>
            <div>
               <img src="/images/header-img/photo-4.png" alt="hotdog image"/>
            </div>
            <div>
               <img src="/images/header-img/photo-5.png" alt="hotdog image"/>
            </div>
            <div>
               <img src="/images/header-img/photo-6.png" alt="hotdog image"/>
            </div>
         </div>
         <div className="bottom-row">
            <div>
               <img src="/images/header-img/photo-7.png" alt="hotdog image"/>
            </div>
            <div>
               <img src="/images/header-img/photo-8.png" alt="hotdog image"/>
            </div>
            <div>
               <img src="/images/header-img/photo-9.png" alt="hotdog image"/>
            </div>
            <div>
               <img src="/images/header-img/photo-10.png" alt="hotdog image"/>
            </div>
            <div>
               <img src="/images/header-img/photo-11.png" alt="hotdog image"/>
            </div>
            <div>
               <img src="/images/header-img/photo-12.png" alt="hotdog image"/>
            </div>
         </div>
         <a href="https://www.instagram.com/explore/tags/hotdogs/?hl=uk"
            target="_blank"
            className="social-link">
            #hotdogs
         </a>
      </div>
   )
};

export default HeaderImageContainer;
