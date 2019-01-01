import React, { Component } from 'react';

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
        this.setState({ personCount: e.target.value, meals: [] });
    }

    toggleModal(modal){
        this.setState({ modalOpen: modal});
    }

    updateMenuSelect() {
        const menuSelector = [];
        for (let i = 0; i < this.state.personCount; i++) {
            menuSelector.push(
                <div className="select is-danger meal">
                    <select onChange={this.addMeal} name={i}>
                        <option value={0}>Meal #{i + 1}</option>
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

                <div style={{ alignItems: "center" }} class={`modal ${this.state.modalOpen ? `is-active` : ''}`}>
                    <div class="modal-background"></div>
                    <div class="modal-card">
                        <div className="modal-card-body reservation-confirmation-modal">
                            <h3>Hello</h3>
                            <button className="button" onClick={() => this.toggleModal(false)}>Open Modal</button>
                        </div>
                    </div>
                    <button class="modal-close is-large" aria-label="close" onClick={() => this.toggleModal(false)}></button>
                </div>

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

                    <button className="button" onClick={() => this.toggleModal(true)}>Open Modal</button>
                </div>

            </div>
        );
    }
}

export default Reservation;