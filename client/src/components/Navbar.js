import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <NavLink activeStyle={{color: "white", background: "linear-gradient(to top left, rgb(255, 29, 86), rgb(218, 65, 111))"}}  to="/">
        <i class="fas fa-home"></i> Home
        </NavLink>
        <NavLink activeStyle={{backgroundColor: "silver"}} to="/menu">
        <i class="fas fa-utensils"></i> Menu
        </NavLink>
        <NavLink activeStyle={{backgroundColor: "silver"}}  to="/reservation">
        <i class="far fa-check-square"></i> Make Reservation
        </NavLink>
        <NavLink activeStyle={{backgroundColor: "silver"}}  to="/about">
        <i class="fas fa-info-circle"></i> About Us
        </NavLink>
      </div>
    )
  }
}
