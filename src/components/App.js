import React from 'react';
import './App.css';
import router from '../router';



import Nav from './Nav/Nav';
import Cart from './Cart/Cart';

export default function App() {
  return (
    <div>
      <Nav />
      <div id="App__mainContainer">
        <div id="App__routerContainer">
          {router}
          <Cart />
        </div>
      </div>
    </div>
  )
}