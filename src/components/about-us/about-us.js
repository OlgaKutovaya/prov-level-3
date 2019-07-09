import React, {Component} from 'react';
import './about-us.sass';

class AboutUs extends Component {
   state = {
      infoList: [
         {
            id: 1,
            infoText: `Accusamus atque doloremque eius, hic laborum nesciunt optio temporibus totam?
                     Aspernatur at culpa debitis dignissimos esse facere id, ipsam nobis, numquam officia sed vitae.
                     Adipisci earum eum hic illo incidunt minima omnis qui quisquam quod quos.
                     Accusantium autem consectetur corporis debitis esse eum harum hic incidunt ipsa itaque maxime`
         },
         {
            id: 2,
            infoText: `Necessitatibus nihil nisi optio pariatur placeat praesentium provident quam quia repellendus
                     sapiente sed, temporibus tenetur vel velit! Accusantium ad architecto, aspernatur cumque
                     dignissimos ducimus error ex exercitationem expedita fugit in libero magnam molestiae nulla odit 
                     omnis possimus ratione recusandae repudiandae sed unde veniam.`
         },
         {
            id: 3,
            infoText: `Sit amet, consectetur adipisicing elit. Adipisci alias aliquid aperiam
                     aut commodi consequuntur cupiditate debitis deleniti dicta dolore doloribus dolorum, et
                     expedita facilis harum iusto laborum, laudantium nulla officia pariatur qui quod rem sed
                     sunt tempore tenetur voluptatibus, consectetur adipisicing elit. Architecto, beatae.`
         },
      ]
   };

   render() {
      return (
         <div className="about-us-container">
            <div className="about-author-wrapper">
               <div className="block-info-wrapper">
                  {this.state.infoList.map((item, index) => {
                     return (
                        <div className="block-info"
                             key={index}>
                           <div className={"img-author face-" + item.id}/>
                           <p>{item.infoText}</p>
                        </div>
                     )
                  })}
               </div>
            </div>
         </div>
      );
   }
}

export default AboutUs;
