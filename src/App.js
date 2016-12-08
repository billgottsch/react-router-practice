import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import './index.css';
import { Link } from 'react-router';
import api from './Api';


class App extends Component {

  getProducts(){
    axios.get(api())
    .then((response) => {
      var newInventory = response.data.data.slice(0);
      this.setState({
        inventory: newInventory
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <a href="https://developer.bestbuy.com">
            <img src="https://developer.bestbuy.com/images/bestbuy-logo.png" className="bbIcon" alt="Best Buy Developer" />
          </a>
          <ul className="App-Navigation">
            <li className="App-Nav-list"><Link to={'/'}>Home</Link></li>
            <li className="App-Nav-list"><Link to={'/stores'}>Stores</Link></li>
            <li className="App-Nav-list"><Link to={'/about'}>About</Link></li>
          </ul>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
