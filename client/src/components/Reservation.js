import React, { Component } from 'react';
import ConfirmationModal from './ConfimationModal';

class Reservation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalOpen: false,
            personCount: 0,
            totalCost: 0,
            meals: []
        }

        this.addMeal = this.addMeal.bind(this);
        this.changedPersonCount = this.changedPersonCount.bind(this);
        this.checkForAllComplete = this.checkForAllComplete.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
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
        this.setState({ meals: updatedMeals }, console.log(this.state.meals));
    }

    changedPersonCount(e) {
        //reset meals array when count changes
        this.setState({ personCount: Number(e.target.value), meals: []});
    }

    //checks to see if user finished picking all meals for each person
    checkForAllComplete(){
        if(this.state.personCount === this.state.meals.length && (this.state.personCount !== 0 && this.state.meals.length !== 0)){
            return (<button className="button" onClick={() => this.toggleModal(true)}>Confirm Reservation</button>);
        }
    }

    toggleModal(modal) {
        this.setState({ modalOpen: modal });
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
            return (
                <h3>Total Cost: {total}</h3>
            )
        }
    }

    render() {
        return (
            <div className="container reservation">

                <ConfirmationModal
                    modalOpen={this.state.modalOpen}
                    toggleModal={this.toggleModal}
                />

                <div className="card reservation-card">
                    <div className="media-content reservation-card__text">
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

                    {this.updateMenuSelect()}
                    {this.updateTotal()}

                    {this.checkForAllComplete()}

                </div>

            </div>
        );
    }
}

export default Reservation;