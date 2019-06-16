import React from 'react';
import './menu.sass'
import ProductPresentation from "./product-presentation/product-presentation";
import ProductList from "./product-list/product-list";

const Menu = () => {
   return (
      <main className="main-content">
         <ProductPresentation/>
         <ProductList/>
      </main>
   )
};

export default Menu;
