import React, {Component} from 'react';
import './header.sass';
import HeaderContainer from "./header-container/header-container";

class Header extends Component {
   render() {
      return (
         <header>
            <HeaderContainer/>
         </header>
      );
   }
}

export default Header;
