import React, {Component} from 'react';
import './contact.sass';

class Contact extends Component {

   initialState = {
      name: '',
      email: '',
      comment: '',
   };

   state = this.initialState;

   submitHandler = async (event) => {
      event.preventDefault();
      const response = await fetch('https://formula-test-api.herokuapp.com/contact', {
         method: 'POST',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(this.state)
      });
      const data = await response.json();
      this.setState(this.initialState);
      console.log('Data: ' + JSON.stringify(data));
      alert('Thank you! Message has been sent successfully');
   };

   handleChange = (event) => {
      const newState = {...this.state};
      const fieldName = event.target.name;
      const fieldValue = event.target.value;

      newState[fieldName] = fieldValue;
      this.setState({...newState});
   };

   render() {
      return (
         <div className="contact-wrapper">
            <div className='contact-container'>
               <form onSubmit={(event) =>
                  this.submitHandler(event)
               }
               >
                  <div className="form-heading">
                     <h2 className='form-heading'>Contact us</h2>
                     <div><img src="/images/contact-us/envelop.png" alt=""/></div>
                  </div>
                  <label className='input-wrapper'>
                     <span>Name:</span>
                     <input type="text"
                            name="name"
                            placeholder='Name'
                            value={this.state.name}
                            required
                            onChange={(event) => {
                               this.handleChange(event)
                            }}
                     />
                  </label>
                  <label className='input-wrapper'>
                     <span>E-mail:</span>
                     <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        required
                        placeholder='example@gmail.com'
                        onChange={(event) => {
                           this.handleChange(event);
                        }}
                     />
                  </label>
                  <div className="input-wrapper">
                     <span>Message</span>
                     <textarea className="input-support"
                               placeholder="Enter your message"
                               name="comment"
                               value={this.state.comment}
                               required
                               onChange={(event) => {
                                  this.handleChange(event);
                               }}
                     />
                  </div>
                  <button>Send</button>
               </form>
            </div>
         </div>
      );
   }
}

export default Contact;
