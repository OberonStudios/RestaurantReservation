import React, { Component } from 'react';

class Reservation extends Component {
    changed(e){
        console.log(e.target.value)
    }

    render() {
        return (
            <div className="container reservation">
                <div className="card reservation-card">
                    <div class="media-content reservation-card__text">
                        <p class="title is-4">Select amount of people</p>
                        <p class="subtitle is-6">Note: Minimum amount of people is 2, and maximum is 7</p>
                    </div>
                    <div className="select is-danger">
                        <select onChange={this.changed}>
                            <option>Person Count</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                        </select>
                    </div>
                </div>

            </div>
        );
    }
}

export default Reservation;