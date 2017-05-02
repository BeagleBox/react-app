import React from 'react'
import ReactDOM from 'react-dom'
import { IntlProvider } from 'react-intl'
import i18nData from './app/config/i18n.config'
import { Router, Route, hashHistory, Redirect } from 'react-router'

import App from './app'
import Homepage from './app/view/homepage'
import GeneralInformation from './app/view/info'
import RequestLocation from './app/view/request'
import Receive from './app/view/receive'
import History from './app/view/history'
import Admin from './app/view/admin'

import Department from './app/view/admin/departments'
import Employees from './app/view/admin/employees'
import BeagleBox from './app/view/admin/beagle-box'
import Reports from './app/view/admin/reports'

import './index.css'

ReactDOM.render(
  <IntlProvider {...i18nData}>
    <Router history={hashHistory}>
      <Redirect from='/' to='/inicio' />

      <Route path='/' component={App}>
        <Route path='inicio' component={Homepage}></Route>
        <Route path='informacoes-gerais' component={GeneralInformation}></Route>
        <Route path='solicitar' component={RequestLocation}></Route>
        <Route path='receber' component={Receive}></Route>
        <Route path='historico' component={History}></Route>
        <Route path='admin' component={Admin}>
          <Route path='departamentos' component={Department}></Route>
          <Route path='funcionarios' component={Employees}></Route>
          <Route path='carrinho' component={BeagleBox}></Route>
          <Route path='relatorios' component={Reports}></Route>
        </Route>
      </Route>
    </Router>
  </IntlProvider>,
document.getElementById('root'));
