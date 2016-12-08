import React, { Component } from 'react';
import api from './Api.js';
import axios from 'axios';
import './StorePage.css';

export default class StorePage extends Component {
  constructor(props){
    super(props);
    this.state={
      stores:[]
    }
  }
  componentDidMount() {
    this.getProducts()
  }

  getProducts(){
    axios.get(api() + '/stores').then((response)=> {
      let stores = response.data.data.slice(0);
      this.setState({
        stores
      })
    })
    .catch((error)=> {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="StorePageContent">
        {this.state.stores.map((store, index) => {
          console.log(store);
          return (
            <div className="storeInformation">
              <ul className="StorePageList" key={store.id}>{store.name}
                <li className="StorePage address">{store.address}
                  <br />{store.city}, {store.state}</li>
                <li className="StorePage hours">{store.hours}</li>
              </ul>
            </div>
          )
        })}
      </div>
    )
  }
}
