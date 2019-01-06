import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class ConfimationModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            datePicked: "",
            userPickedDate: false
        }
    }

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

    render() {
        return (
            <div class={`modal ${this.props.modalOpen ? `is-active` : ''} confirmationModal`}>
                <div class="modal-background"></div>
                <div class="modal-card">
                    <div className="modal-card-body reservation-confirmation-modal">
                        <h1 className="is-size-3">Confirmation</h1>
                        <div style={{ border: "1px solid black" }}>
                            <DatePicker
                                selected={new Date()}
                            />
                        </div>

                        <ul className="modal-list">
                            {this.renderMeals()}
                        </ul>

                        {this.renderTotalPrice()}
                        <button className="button" onClick={() => this.props.toggleModal(false)}>Open Modal</button>
                    </div>
                </div>

                <button class="modal-close is-large" aria-label="close" onClick={() => this.props.toggleModal(false)}></button>
            </div>
        );
    }
}

export default ConfimationModal;