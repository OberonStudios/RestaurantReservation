import React, { Component } from 'react';
import ConfirmationModal from './ConfimationModal';
import DateTimePicker from 'react-datetime-picker';
import uuid from 'uuid';
import authenticationHOC from './authenticationHOC';

class Reservation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalOpen: false,
            totalPrice: 0,
            personCount: 0,
            meals: [],
            //date and time that user picks for reservation
            datePicked: "",
            userPickedDate: false,
            uuid: uuid()
        }

        this.addMeal = this.addMeal.bind(this);
        this.changedPersonCount = this.changedPersonCount.bind(this);
        this.checkForAllComplete = this.checkForAllComplete.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.updateMenuSelect = this.updateMenuSelect.bind(this);
        this.updateTotal = this.updateTotal.bind(this);
    }

    addMeal(e) {
        //console.log(e.target.name)
        //console.log(e.target.options[e.target.options.selectedIndex].text);
        //create temporary array that copies the state's meal array
        let updatedMeals = this.state.meals;
        //give it the object containing the name and price of selected meal
        updatedMeals[Number(e.target.name)] = {
            name: e.target.options[e.target.options.selectedIndex].text,
            price: Number(e.target.value)
        }
        //update the state
        this.updateTotal();
        this.setState({ meals: updatedMeals }, console.log(this.state.meals));
    }

    addDays() {
        var result = new Date();
        result.setDate(result.getDate() + 15);
        return result;
    }

    changedPersonCount(e) {
        //reset meals array when count changes
        this.updateTotal();
        this.setState({ personCount: Number(e.target.value), meals: [] });
    }

    //checks to see if user finished picking all meals for each person
    checkForAllComplete() {
        if (this.state.personCount === this.state.meals.length && (this.state.personCount !== 0 && this.state.meals.length !== 0)) {
            return (
                <button className="button" onClick={() => this.toggleModal(true)}>Confirm Reservation</button>
            );
        }
    }

    handleDateChange(e) {
        this.setState({ datePicked: e, userPickedDate: true }, console.log(this.state))
    }

    handleMaxDate() {
        const date = new Date();
        date.setDate(date.getDate() + 9);
        return date;
    }

    toggleModal(modal) {
        this.setState({ modalOpen: modal });
    }

    onChangeDate = (event, { name, value }) => {
        if (this.state.hasOwnProperty(name)) {
            this.setState({ [name]: value });
        }
    }

    updateMenuSelect() {
        const menuSelector = [];
        for (let i = 0; i < this.state.personCount; i++) {
            menuSelector.push(
                <div className="select is-danger meal" key={`${i}-${this.state.personCount}`}>
                    <select onChange={this.addMeal} name={i}>
                        <option value={0} disabled selected>Meal #{i + 1}</option>
                        <option value={15}>Cheesy Stuffed BBQ Pork Burgers</option>
                        <option value={17}>Tex-Mex Cheese-Stuffed Burgers</option>
                        <option value={20}>Fiesta Chicken Tacos</option>
                        <option value={24}>Apricot Balsamic-Glazed Pork Tenderloin</option>
                        <option value={15}>Lemon Pepper Chicken Linguine</option>
                    </select>
                </div>
            );
        }

        return (
            <div className="mealPicker media-content">
                {menuSelector}
            </div>
        );
    }

    updateTotal() {
        let total = 0;
        for (let i = 0; i < this.state.meals.length; i++) {
            if (this.state.meals[i])
                total += this.state.meals[i].price;
        }

        if (total) {
            this.setState({ totalPrice: total });
        }
    }

    render() {
        return (
            <div className="reservation">

                <ConfirmationModal
                    modalOpen={this.state.modalOpen}
                    value={this.state.date}
                    toggleModal={this.toggleModal}
                    confirmation={this.state}
                />

                <div className="card reservation-card">
                    <div className="media-content card-section">
                        <p className="title is-4">Pick a date and time</p>
                        <p className="subtitle is-6">Note: You're only able to reservation a maximum 10 days in advanced</p>

                        <DateTimePicker
                            onChange={this.handleDateChange}
                            minDate={new Date()}
                            maxDate={this.handleMaxDate()}
                            value={this.state.datePicked}
                        />

                    </div>
                    {
                        this.state.userPickedDate ?
                        (<React.Fragment>
                        <div className="media-content reservation-card__text card-section">
                            <p className="title is-4">Select amount of people</p>
                            <p className="subtitle is-6">Note: Minimum amount of people is 2, and maximum is 7</p>
                        </div>

                        <div className="select is-danger">
                            <select onChange={this.changedPersonCount}>
                                <option>Person Count</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                            </select>
                        </div>
                        </React.Fragment>) : ""
                    }

                    {this.updateMenuSelect()}
                    {this.checkForAllComplete()}

                </div>

            </div>
        );
    }
}

export default authenticationHOC(Reservation);