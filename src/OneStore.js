import React, {Component} from 'react';
import api from './Api';
import axios from 'axios';


export default class OneStore extends Component {
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
    axios.get(api() + '/stores/' + this.props.params.OneStoreId).then((response) => {
      let OneStoreResult = response.data;
      this.setState({OneStoreResult});
    })
  }
  render() {
    return (
      <div className="OneStore">
        This is where one store would be
      </div>
    );
  }
}
