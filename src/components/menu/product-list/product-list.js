import React, {Component} from 'react';
import './product-list.sass';

class ProductList extends Component {

   state = {
      menu: [],
   };

   getMenuList = async () => {
      let responsePosts = await fetch('https://formula-test-api.herokuapp.com/menu');
      let data = await responsePosts.json();
      this.setState({menu: data});
   };

   getCurrentDate = () => {
      let today = new Date();
      today.setHours(0, 0, 0, 0);
      return today
   };

   filterByExpiration = (items) => {
      let currentDate = this.getCurrentDate();

      return items.filter((item) => {
         return new Date(item.expirationDate) > currentDate
      });
   };

   componentDidMount() {
      this.getMenuList();
   }

   render() {

      const renderMenuItem = (item, index) => {
         return (
            <div className="product-list-content" key={item.id}>
               { (index % 2 === 0 ? renderMenuText(item) : renderMenuImage(item))}
               { (index % 2 !== 0 ? renderMenuText(item) : renderMenuImage(item))}
            </div>
         )
      };

      const renderMenuImage = (item) => {
         return (
            <div className="product-list-img">
               {/*<img src={item.backgroundURL}"/>
               // API image URLs from CDN return 404, so we use default one*/}
               <img src="/images/layer-1.png" alt="burger"/>
            </div>
         )
      };

      const renderMenuText = (item) => {
         return (
            <div className="product-list-text-wrapper">
               <div className="product-list-text">
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
               </div>
            </div>
         )
      };

      // ! Correct way to filter out all expired menu elements
      // let filteredMenuList = this.filterByExpiration(this.state.menu); // filtered array

      // API dates are all expired (from 2018), so we display an unfiltered menu item list as it is
      let filteredMenuList = this.state.menu;

      return (
         <section className="product-list-wrapper">
            {filteredMenuList.map((item, index) => {
               return renderMenuItem(item, index);
            })}
         </section>
      );
   }
}

export default ProductList;
