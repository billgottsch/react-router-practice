import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import home from './HomePage';
import stores from './StorePage';
import about from './AboutPage';
import NoMatch from './NoMatch';
import oneStore from './OneStore';



ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={home} />
      <Route path="stores" component={stores}/>
      <Route path="about" component={about}/>
      <Route path="stores/:id" component={oneStore}/>
    </Route>
    <Route path="*" component={NoMatch}/>
  </Router>
,document.getElementById('root')
);
