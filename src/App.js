import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { withGoogleMap } from 'react-google-maps';
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
          <img src={logo} className="App-logo" alt="logo" />
          <ul style={{listStyle:"none", display:"flex", justifyContent:"space-around", margin:"0", padding:"0", fontSize:"24px", textDecoration:"none"}}>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/StorePage'}>Stores</Link></li>
            <li><Link to={'/AboutPage'}>About</Link></li>
          </ul>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
