import React, {Component} from 'react';
import mapPin from './map-pin.png';

export default class MapIcon extends Component {
  render() {
    return(
      <div>
        <img src={mapPin} alt="presentation" style={{height:"40px"}}></img>
      </div>
    )
  }
}
