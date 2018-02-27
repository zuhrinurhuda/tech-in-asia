import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { userReducers } from '../reducers'

const reducers = combineReducers({ userReducers })
const middleware = applyMiddleware(thunk)
const store = createStore(reducers, middleware)

export default store