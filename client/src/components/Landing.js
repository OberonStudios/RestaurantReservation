import React, { Component } from 'react';
import Navbar from './Navbar';

export default class Landing extends Component {
  render() {
    return (
      <div className="homePage">
        <Navbar/>
        <div className="homePage__text">
            <h3>Oberon Lunch House</h3>
        </div>
      </div>
    )
  }
}
