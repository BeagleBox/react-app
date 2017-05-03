import { combineReducers } from 'redux'
import { routerReducer } from "react-router-redux"

import login from './login.reducer'
import history from './history.reducer'

const beagleboxapp = combineReducers({
  login,
  history,
  routing: routerReducer,
})

export default beagleboxapp
