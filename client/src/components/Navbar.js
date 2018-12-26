import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <NavLink activeStyle={{color: "white", background: "linear-gradient(to top left, rgb(255, 29, 86), rgb(218, 65, 111))"}}  to="/" exact>
        <i className="fas fa-home"></i> Home
        </NavLink>
        <NavLink activeStyle={{color: "white", background: "linear-gradient(to top left, rgb(255, 29, 86), rgb(218, 65, 111))"}} to="/menu" exact>
        <i className="fas fa-utensils"></i> Menu
        </NavLink>
        <NavLink activeStyle={{color: "white", background: "linear-gradient(to top left, rgb(255, 29, 86), rgb(218, 65, 111))"}}  to="/reservation" exact>
        <i className="far fa-check-square"></i> Make Reservation
        </NavLink>
        <NavLink activeStyle={{color: "white", background: "linear-gradient(to top left, rgb(255, 29, 86), rgb(218, 65, 111))"}}  to="/about" exact>
        <i className="fas fa-info-circle"></i> About Us
        </NavLink>
      </div>
    )
  }
}
