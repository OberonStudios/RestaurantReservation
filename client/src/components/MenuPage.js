import React, { Component } from 'react';
import MenuItem from './MenuItem';
import { menuList } from './menuList';

class MenuPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPosition: 0
    }

    this.changeCurrentPosition = this.changeCurrentPosition.bind(this);
    this.renderMenuList = this.renderMenuList.bind(this);
  }

  changeCurrentPosition(index){
    this.setState({currentPosition: index});
  }

  renderMenuList() {
    return (
      <MenuItem meal={menuList[this.state.currentPosition]} />
    )
  }

  renderItemPicker() {
    return menuList.map(item => {
      return (
        <li className="menuSelector__item" onClick={() => this.changeCurrentPosition(item.id)}>
          <img src={item.image} />
          <p>{item.name}</p>
        </li>
      )
    })
  }

  render() {
    return (
      <div className="menu">
        {this.renderMenuList()}
        <ul className="menuSelector">
          {this.renderItemPicker()}
        </ul>
      </div>
    );
  }
}

export default MenuPage;
