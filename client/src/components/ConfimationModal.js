import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';
import "react-datepicker/dist/react-datepicker.css";

class ConfimationModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            datePicked: new Date(),
            userPickedDate: false
        }

        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleDateChange(e) {
        this.setState({ datePicked: e }, console.log(this.state))
    }

    handleMaxDate() {
        const date = new Date();
        date.setDate(date.getDate() + 9);
        return date;
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
                            <DateTimePicker
                                onChange={this.handleDateChange}
                                minDate={this.state.datePicked}
                                maxDate={this.handleMaxDate()}
                                value={this.state.datePicked}
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