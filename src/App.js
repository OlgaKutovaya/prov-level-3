import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import Wrapper from "./components/wrapper/wrapper";
import Menu from "./components/menu/menu";
import Catering from "./components/catering/catering";
import AboutUs from "./components/about-us/about-us";
import Contact from "./components/contact/contact";
import ErrorMessage from "./components/error-message/error-message";

function App() {
   return (
      <BrowserRouter>
         <div className="App">
            <Wrapper>
               <Switch>
                  <Route exact path='/' component={Menu}/>
                  <Route exact path='/catering' component={Catering}/>
                  <Route exact path='/about-us' component={AboutUs}/>
                  <Route exact path='/contact' component={Contact}/>
                  <Route path='*' component={ErrorMessage}/>
               </Switch>
            </Wrapper>
         </div>
      </BrowserRouter>
   );
}

export default App;
