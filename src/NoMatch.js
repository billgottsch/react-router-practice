import React, { Component } from 'react';
import error from './404error1.jpg';

export default class NoMatch extends Component {
  render() {
    return(
      <img src={error} role="presentation" style={{margin: "0 auto"}}></img>
    )
  }
}
