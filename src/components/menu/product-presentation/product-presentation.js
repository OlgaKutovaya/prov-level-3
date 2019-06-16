import React from 'react';
import './product-presentation.sass';

const ProductPresentation = () => {
   return (
      <section className="product-presentation-wrapper">
         <div className="presentation-content">
            <div className="presentation-img"><img src="/images/hotdog-center.png" alt=""/></div>
            <h1>Dirty Dogs serves all-beef, vegan and vegetarian hot dogs</h1>
            <button>More Dogs'n Make Em Hot</button>
         </div>
      </section>
   )
};

export default ProductPresentation;
