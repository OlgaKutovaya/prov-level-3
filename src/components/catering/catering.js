import React, {Component} from 'react';
import './catering.sass';

class Catering extends Component {
   state = {
      cateringList: [
         {
            title: 'Barbecue',
            text: `Looking for something delicious your guests or employees will love? How does flavorful BBQ and 
            homemade classics sound? Call BBQ Catering!`,
            imgUrl: '/images/catering/barbecue.jpg'
         },
         {
            title: 'Bar Catering',
            text: `Fully licensed and insured, we provide bar catering services for corporate events, weddings, 
            social events, festivals, fundraisers, and a variety of other occasions`,
            imgUrl: '/images/catering/bar-catering.jpg'
         },
         {
            title: 'Cocktails',
            text: `Cocktails are very popular during presentations and social events. We will develop an individual 
            menu and select drinks to suit your event.`,
            imgUrl: '/images/catering/cocktail.jpg'
         },
         {
            title: 'Coffee breaks',
            text: `Because a corporate event, a meeting or a professional gathering can be long, we thought about 
            preparing you snacks breaks.`,
            imgUrl: '/images/catering/coffee-break.jpg'
         },
      ],
   };

   render() {
      const renderCateringBlock = (items) => {
         return (
            <div className="catering-block">
               {items.map((item) => {
                  return (
                     renderCateringInfo(item)
                  )
               })}
            </div>
         )
      };

      const renderCateringInfo = (item) => {
         return (
            <div className="catering-info-wrapper">
               <div className="view">
                  <img src={item.imgUrl} alt=""/>
                  <div className="text-content">
                     <h2>{item.title}
                        <img className="hand-img" src="/images/catering/hand.png" alt=""/>
                     </h2>
                  </div>
                  <div className="mask">
                     <h3>{item.title}</h3>
                     <p>{item.text}</p>
                  </div>
               </div>
            </div>
         )
      };

      return (
         <div className="catering-container">
            {this.state.cateringList.reduce(function (result, value, index, array) {
               if (index % 2 === 0)
                  result.push(renderCateringBlock(array.slice(index, index + 2)));
               return result;
            }, [])}
         </div>
      );
   }
}

export default Catering;
