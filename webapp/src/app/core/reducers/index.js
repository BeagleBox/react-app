import { combineReducers } from 'redux'
import { routerReducer } from "react-router-redux"

const beagleboxapp = combineReducers({
  routing: routerReducer,
})

export default beagleboxapp
