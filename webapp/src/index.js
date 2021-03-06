import React from 'react'
import ReactDOM from 'react-dom'
import { IntlProvider } from 'react-intl'
import { Provider } from 'react-redux'
import i18nData from './app/config/i18n.config'
import { Router, Route, hashHistory, Redirect, IndexRoute } from 'react-router'

import App from './app'
import NotFound from './app/shared/not-found'
import Homepage from './app/view/homepage'

import GeneralInformation from './app/view/general-user/info'
import RequestLocation from './app/view/general-user/request'
import Receive from './app/view/general-user/receive'
import History from './app/view/general-user/history'
import GeneralUser from './app/view/general-user'

import Admin from './app/view/admin'
import Welcome from './app/view/admin/welcome'
import Department from './app/view/admin/departments'
import Employees from './app/view/admin/employees'
import Reports from './app/view/admin/reports'

import store from  "./app/core/store"

import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider {...i18nData}>
      <Router history={hashHistory}>
        <Redirect from='/' to='/inicio' />
        <Route path='/' component={App}>
          <Route path='inicio' component={Homepage}></Route>
          <Route component={GeneralUser}>
            <Route path='informacoes-gerais' component={GeneralInformation}></Route>
            <Route path='solicitar' component={RequestLocation}></Route>
            <Route path='receber' component={Receive}></Route>
            <Route path='historico' component={History}></Route>
          </Route>
          <Route path='admin' component={Admin}>
            <IndexRoute component={Welcome} />
            <Route path='departamentos' component={Department} />
            <Route path='funcionarios' component={Employees} />
            <Route path='relatorios' component={Reports} />
          </Route>
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    </IntlProvider>
  </Provider>,
document.getElementById('root'));
