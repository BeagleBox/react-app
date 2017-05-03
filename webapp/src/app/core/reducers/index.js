import { combineReducers } from 'redux'
import { routerReducer } from "react-router-redux"

import login from './login.reducer'
import history from './history.reducer'
import receive from './receive.reducer'

const beagleboxapp = combineReducers({
  login,
  history,
  receive,
  routing: routerReducer,
})

export default beagleboxapp
