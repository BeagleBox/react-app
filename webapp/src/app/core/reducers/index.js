import { combineReducers } from 'redux'
import { routerReducer } from "react-router-redux"

import login from './login.reducer'

const beagleboxapp = combineReducers({
  login,
  routing: routerReducer,
})

export default beagleboxapp
