import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, Redirect } from 'react-router'

import App from './app'
import Homepage from './app/view/homepage'
import RequestLocation from './app/view/request'

import './index.css'

ReactDOM.render(
  <Router history={hashHistory}>
    <Redirect from="/" to="/inicio" />

    <Route path="/" component={App}>
      <Route path="inicio" component={Homepage}></Route>
      <Route path="solicitar" component={RequestLocation}>
      </Route>
    </Route>
  </Router>,
document.getElementById('root'));
