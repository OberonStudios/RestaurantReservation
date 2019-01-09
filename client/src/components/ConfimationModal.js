import React, { Component } from 'react';
import * as actions from '../Actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class ConfimationModal extends Component {

    renderMeals() {
        if (this.props.confirmation) {
            return this.props.confirmation.meals.map(item => {
                return (
                    <li>
                        {item.name}: ${item.price}
                    </li>
                )
            })
        }
    }

    renderTotalPrice() {
        let totalPrice = 0;
        if (this.props.confirmation) {
            for (let i = 0; i < this.props.confirmation.meals.length; i++) {
                if (this.props.confirmation.meals[i])
                    totalPrice += this.props.confirmation.meals[i].price;
            }
        }

        return <p>Total Price: ${totalPrice}</p>
    }

    submitReservation(data){
        this.props.createReservation(data)
            .then(this.props.history.push("/"));
    }

    render() {
        return (
            <div class={`modal ${this.props.modalOpen ? `is-active` : ''} confirmationModal`}>
                <div class="modal-background"></div>
                <div class="modal-card">
                    <div className="modal-card-body reservation-confirmation-modal">
                        <h1 className="is-size-3">Confirmation</h1>

                        <ul className="modal-list">
                            {this.renderMeals()}
                        </ul>

                        {this.renderTotalPrice()}
                        <button className="button" onClick={() => this.submitReservation(this.props.confirmation)}>Reserve</button>
                        <button className="button" onClick={() => this.props.toggleModal(false)}>Close</button>
                    </div>
                </div>

                <button class="modal-close is-large" aria-label="close" onClick={() => this.props.toggleModal(false)}></button>
            </div>
        );
    }
}

export default withRouter(connect(null, actions)(ConfimationModal));