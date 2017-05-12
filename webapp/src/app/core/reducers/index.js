import { combineReducers } from 'redux'
import { routerReducer } from "react-router-redux"

import history from './history.reducer'
import receive from './receive.reducer'
import request from './request.reducer'
import admin from './admin.reducer'
import auth from './acquire-auth-token.reducer'

const beagleboxapp = combineReducers({
  history,
  receive,
  request,
  admin,
  auth,
  routing: routerReducer,
})

export default beagleboxapp
