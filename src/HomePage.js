import React, { Component } from 'react';
import { withGoogleMap } from 'react-google-maps';
import axios from 'axios';
import { Router, Route, Link } from 'react-router';
import './index.css';

export default class HomePage extends Component {
  render() {
    return(
      <div className="App-HomePage">
        <h3 className="App-HomePage_desc">What is it?</h3>
        <p className="App-HomePage_text">This project was created as an assignment for The Iron Yard to test our abilities with React Router.</p>
        <h3 className="App-HomePage_desc">What does it do?</h3>
        <p className="App-HomePage_text">The app is a very simplistic design focused primarily on functionality and working with React, react-router, AJAX calls with axios and adding a new feature called react-google-maps.</p>
      </div>
    )
  }
}
