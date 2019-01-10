import React, { Component } from 'react';
import Landing from './components/Landing';
import MenuPage from './components/MenuPage';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Navbar from './components/Navbar';
import Reservation from './components/Reservation';
import {BrowserRouter,Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './Actions';
import './sass/main.scss';
import 'bulma/css/bulma.css';

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="App">
            <Navbar/>
            <Route exact path='/' component={Landing} />
            <Route exact path='/menu' component={MenuPage} />
            <Route exact path='/reservation' component={Reservation}/>
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/about' component={About}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
