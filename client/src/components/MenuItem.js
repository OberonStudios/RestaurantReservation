import React, { Component } from 'react';

export default class MenuItem extends Component {
  render() {
    const meal = this.props.meal;

    return (
      <div className="menu__item">
        <div className="menu__item--text">
          <h3>{meal.name}</h3>
          <p>{meal.calories}</p>
          <p>{meal.ingredients.length} Ingredients:</p>
          <p>{meal.ingredients.join(", ")}</p>
          <p>Expected wait time: {meal.time}</p>
        </div>
        <div className="menu__item--image">
          <img src={meal.image} alt="food" />
        </div>
      </div>
    )
  }
}
