import React, { Component } from 'react';
import Navbar from './Navbar';
import Salad from '../images/salad.jpg';
import Pancake from '../images/pancakes.jpg';

class Landing extends Component {
  render() {
    return (
      <div className="homePage">
        <Navbar />

        <div className="homePage__images">
          <div className="homePage__images__title">
            <h3>Oberon Lunch House</h3>
            <p>Make your reservation today.</p>

            <img src={Pancake} />
          </div>

          <img src={Salad} />

        </div>
      </div>
    );
  }
}

export default Landing;
