import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const navLinkStyle = {
  color: "white",
  background: "linear-gradient(to top left, rgb(255, 29, 86), rgb(218, 65, 111))"
}

class Navbar extends Component {
  //if user is not logged in, return login link
  renderAuthentication() {
    if (!this.props.auth) {
      return (
          <a href="/auth/google">
            <i className="fas fa-home"></i> Login
          </a>
      );
    }
    //otherwise return a link to user's dashboard, and option to logout
    else {
      return (
        <Fragment>
          <NavLink activeStyle={navLinkStyle} exact to="/reservation">
            <i className="far fa-check-square"></i> Make Reservation
          </NavLink>
          <NavLink activeStyle={navLinkStyle} exact to="/dashboard">
            <i class="fas fa-columns"></i> Dashboard
          </NavLink>
          <a href="/api/logout">
            <i class="fas fa-sign-out-alt"></i> Logout
          </a>
        </Fragment>
      )
    }
  }
  render() {
    return (
      <div className="navbar">
        <NavLink activeStyle={navLinkStyle} exact to="/">
          <i className="fas fa-home"></i> Home
        </NavLink>
        <NavLink activeStyle={navLinkStyle} exact to="/menu">
          <i className="fas fa-utensils"></i> Menu
        </NavLink>
        {this.renderAuthentication()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      auth: state.auth
  };
}

//{pure: false} allows navlink to work properly
//activestyle will not work without it
export default connect(mapStateToProps, null, null, { pure: false })(Navbar);