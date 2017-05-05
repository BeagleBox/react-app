import { applyMiddleware, compose } from "redux"
import { apiMiddleware } from "redux-api-middleware"
import logger from 'redux-logger'
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

const middlewares = [
  thunk,
  promise(),
  apiMiddleware,
  logger,
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default composeEnhancers(applyMiddleware(...middlewares));
