import React, { Component } from 'react';
import MenuItem from './MenuItem';

class MenuPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentPosition: 0
    }
  }

  render() {
    return (
      <div>
        <MenuItem/>
      </div>
    );
  }
}

export default MenuPage;
