import React, { Component } from 'react';

class Reservation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            personCount: 0,
            totalCost: 0,
            meals: []
        }

        this.addMeal = this.addMeal.bind(this);
        this.changedPersonCount = this.changedPersonCount.bind(this);
        this.updateMenuSelect = this.updateMenuSelect.bind(this);
    }

    addMeal(e){
        console.log(e.target.name)
        console.log(e.target.options.selectedIndex)
        this.setState({ totalCost: this.state.totalCost + e.target.value });
    }

    changedPersonCount(e) {
        this.setState({ personCount: e.target.value });
    }

    updateMenuSelect() {
        const menuSelector = [];
        for (let i = 0; i < this.state.personCount; i++) {
            menuSelector.push(
                <div className="select is-danger meal">
                    <select onChange={this.addMeal} name={i}>
                        <option value={0}>Meal #{i+1}</option>
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

    render() {
        return (
            <div className="container reservation">
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
                </div>

            </div>
        );
    }
}

export default Reservation;