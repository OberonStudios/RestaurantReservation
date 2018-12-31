import React, { Component } from 'react';

class Reservation extends Component {
    render() {
        return (
            <div className="container">
                <div className="select is-danger">
                    <select>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default Reservation;