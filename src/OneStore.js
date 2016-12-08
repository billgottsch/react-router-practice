import React, {Component} from 'react';
import api from './Api';
import axios from 'axios';
import GoogleMap from 'google-map-react';
import MapIcon from './MapIcon';
import './StorePage';



export default class oneStore extends Component {
  constructor(props) {
    super(props)
    this.state = {
      OneStoreResult: {}
    }
  }

  componentDidMount() {
    this.getOneStore()
  }
  getOneStore() {
    axios.get(api() + '/stores/' + this.props.params.id).then((response) => {
      let OneStoreResult = response.data;
      this.setState({OneStoreResult});
    })
  }

//API Key AIzaSyAdAPhugq9zI7_2IFi-rge_AK_H1rncb-A

  render() {
    return (
      <div className="OneStore" style={{height:'400px' , width:'600px', margin: '0 auto'}}>
        <h2>{this.state.OneStoreResult.name}</h2>
        <p>{this.state.OneStoreResult.address}</p>
        <p>{this.state.OneStoreResult.city + ', ' + this.state.OneStoreResult.state}</p>
        <p>{this.state.OneStoreResult.hours}</p>


        <GoogleMap
          center={{lat:this.state.OneStoreResult.lat, lng:this.state.OneStoreResult.lng}}
          defaultZoom={10}
          bootstrapURLKeys={{
            key: 'AIzaSyAdAPhugq9zI7_2IFi-rge_AK_H1rncb-A'
            }}
          >
          <MapIcon lat={this.state.OneStoreResult.lat} lng={this.state.OneStoreResult.lng}/>
        </GoogleMap>

      </div>
    );
  }
}
