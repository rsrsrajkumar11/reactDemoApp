import React from 'react';
import logo from './logo.svg';
import './App.css';
import { directive } from '@babel/types';

function App() {
  return (
    <div className="cart">
      <div className="img-container">
        <img src="https://lh5.googleusercontent.com/p/AF1QipNXQUy3rDZhbxPT57pQF2R-_78vTOwwlipYobWo=w143-h95-n-k-no"/>
      </div>
    <div className="cart-container">
    <h5 className="title">Pizza | <span>5oz</span></h5>
    <p className="calories">561<span>KCal</span></p>
    <div className="cabs">Cabs</div>
    <div className="protens">Proteins</div>
    <div className="fats">Fats</div>
    </div>
</div>
  );
}

export default App;
