import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <NavLink activeStyle={{color: "green"}}  to="/">
        <i class="fas fa-home"></i> Home
        </NavLink>
        <NavLink activeStyle={{color: "green"}} to="/menu">
        <i class="fas fa-utensils"></i> Menu
        </NavLink>
        <NavLink activeStyle={{color: "green"}}  to="/reservation">
        <i class="far fa-check-square"></i> Make Reservation
        </NavLink>
        <NavLink activeStyle={{color: "green"}}  to="/about">
        <i class="fas fa-info-circle"></i> About Us
        </NavLink>
      </div>
    )
  }
}
