import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {
  //if user is not logged in, return login link
  renderAuthentication() {
    if (!this.props.auth) {
      return (
        <>
          <a activeStyle={{ color: "white", background: "linear-gradient(to top left, rgb(255, 29, 86), rgb(218, 65, 111))" }} href="/auth/google" exact>
            <i className="fas fa-home"></i> Login
          </a>
        </>
      );
    }
    //otherwise return a link to user's dashboard, and option to logout
    else {
      return (
        <>
          <NavLink activeStyle={{ color: "white", background: "linear-gradient(to top left, rgb(255, 29, 86), rgb(218, 65, 111))" }} to="/reservation" exact>
            <i className="far fa-check-square"></i> Make Reservation
          </NavLink>
          <NavLink activeStyle={{ color: "white", background: "linear-gradient(to top left, rgb(255, 29, 86), rgb(218, 65, 111))" }} to="/dashboard" exact>
            <i className="fas fa-home"></i> Dashboard
          </NavLink>
          <a activeStyle={{ color: "white", background: "linear-gradient(to top left, rgb(255, 29, 86), rgb(218, 65, 111))" }} href="/api/logout" exact>
            <i className="fas fa-home"></i> Logout
          </a>
        </>
      )
    }
  }
  render() {
    return (
      <div className="navbar">
        <NavLink activeStyle={{ color: "white", background: "linear-gradient(to top left, rgb(255, 29, 86), rgb(218, 65, 111))" }} to="/" exact>
          <i className="fas fa-home"></i> Home
        </NavLink>
        <NavLink activeStyle={{ color: "white", background: "linear-gradient(to top left, rgb(255, 29, 86), rgb(218, 65, 111))" }} to="/menu" exact>
          <i className="fas fa-utensils"></i> Menu
        </NavLink>
        <NavLink activeStyle={{ color: "white", background: "linear-gradient(to top left, rgb(255, 29, 86), rgb(218, 65, 111))" }} to="/about" exact>
          <i className="fas fa-info-circle"></i> About Us
        </NavLink>
        {this.renderAuthentication()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Navbar);
