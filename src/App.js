import React from 'react';
import {  Switch , Route } from 'react-router-dom';
import './App.css';
import Header from './COMPONENTS/HEADER/Header'
import Checkout from './PAGES/CHECKOUT/Checkout';
import Home from './PAGES/HOME/Home'
import Login from './PAGES/LOGIN/Login';

function App() {   //functional component 1)class component 
  return (           //JSX MEANS WE ARE USING JAVASCRIPT+XML XML MEANS HTML
                     /*BEM:-BLOCK ELEMENT AND MODIFIER THIS IS USE TO HAVE CSS IN NEAT WAY*/ 
    <Switch>
      <Route path="/login">
            <Login/>
      </Route>
       <Route path="/checkout">
        <Header/>
        <Checkout/>
       </Route>
       <Route path="/">
          <Header />
          <Home />
        </Route>
    </Switch>

  );
}

export default App;
