import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../Actions';
import authenticationHOC from './authenticationHOC';

class Dashboard extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }

    getReservationHistory(){
        if(this.props.auth && this.props.auth.reservations.length > 0){
            return this.props.auth.reservations.map(reservation => {
                return(
                    <li>
                        <h4>Date: {reservation.datePicked}</h4>
                        <p>Reservation for {reservation.personCount} people</p>
                        <p>Total Price: ${reservation.totalPrice}</p>
                        <button className="button" onClick={() => this.removeReservation(reservation.uuid)}>Remove Reservation History</button>
                    </li>
                )
            })
        }
    }

    removeReservation(id){
        this.props.removeReservation(id)
            .then(this.props.fetchUser());
    }

    renderUserInfo(){
        if(this.props.auth){
            const user = this.props.auth;
            return(
                <div>
                    <h3>User: {user.displayName}</h3>
                    <ul>
                        {this.getReservationHistory()}
                    </ul>
                </div>
            )
        }
        else{
            return(
                <>
                    <h4>Error: Could not load user data</h4>
                </>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderUserInfo()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
  }

export default connect(mapStateToProps, actions)(authenticationHOC(Dashboard));