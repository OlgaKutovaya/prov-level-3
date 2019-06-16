import React from 'react';
import {Link} from "react-router-dom";
import './header-nav.sass';

const HeaderNav = () => {
   return (
         <nav className="nav-menu">
            <Link className="nav-link" to='/'>Menu</Link>
            <Link className="nav-link" to='/catering'>Catering</Link>
            <Link className="nav-link" to='/about-us'>About us</Link>
            <Link className="nav-link" to='/contact'>Contact</Link>
         </nav>
   )
};

export default HeaderNav;
