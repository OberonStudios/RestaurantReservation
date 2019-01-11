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
            return this.props.auth.reservations.map((reservation, index) => {
                return(
                    <li className="dashboard__item">
                        <p className="is-size-5 is-size-6-mobile">Reservation #{index+1}</p>
                        <p>Date: {reservation.datePicked}</p>
                        <p>Reservation for {reservation.personCount} people</p>
                        <p>Total Price: ${reservation.totalPrice}</p>
                        <button className="button" onClick={() => this.removeReservation(reservation.uuid)}>Remove Reservation History</button>
                    </li>
                )
            })
        }
        else{
            return(
                <li className="dashboard__item">Your past and/or upcoming reservations will be dispayed here</li>
            )
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
                <>
                    <h3 className="is-size-4 is-size-5-mobile">User: {user.displayName}</h3>
                    <ul className="dashboard__list">
                        {this.getReservationHistory()}
                    </ul>
                </>
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
            <div className="dashboard">
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