import React, { Component } from 'react';

export default class MenuItem extends Component {
  render() {
    const meal = this.props.meal
    return (
      <div>
        <h3>{meal.name}</h3>
        <img src={meal.image} alt="food"/>
      </div>
    )
  }
}
