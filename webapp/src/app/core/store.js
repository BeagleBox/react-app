import { createStore } from 'redux'

import reducers from './reducers'
import middleware from './middlewares'

export default createStore(reducers, middleware);
