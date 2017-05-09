import { combineReducers } from 'redux'
import { routerReducer } from "react-router-redux"

import login from './login.reducer'
import history from './history.reducer'
import receive from './receive.reducer'
import request from './request.reducer'
import admin from './admin.reducer'

const beagleboxapp = combineReducers({
  login,
  history,
  receive,
  request,
  admin,
  routing: routerReducer,
})

export default beagleboxapp
