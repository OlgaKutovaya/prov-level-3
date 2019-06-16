import React from 'react';
import './header-container.sass';
import HeaderImageContainer from "./header-image-container/header-image-container";
import HeaderNav from "./header-nav/header-nav";

const HeaderContainer = () => {
   return (
      <div className="header-container">
         <HeaderImageContainer/>
         <HeaderNav/>
      </div>
   )
};

export default HeaderContainer;
