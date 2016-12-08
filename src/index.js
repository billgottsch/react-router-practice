import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import HomePage from './HomePage';
import StorePage from './StorePage';
import AboutPage from './AboutPage';
import NoMatch from './NoMatch';
import OneStore from './OneStore'



ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="StorePage" component={StorePage}/>
      <Route path="AboutPage" component={AboutPage}/>
      <Route path="StorePage/:OneStoreId" component={OneStore}/>
    </Route>
    <Route path="*" component={NoMatch}/>
  </Router>
,document.getElementById('root')
);
