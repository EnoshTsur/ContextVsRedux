import { createStore, combineReducers } from 'redux'
import counterReducer from './counterReducer'
import { composeWithDevTools, } from 'redux-devtools-extension'

const reducers = combineReducers({ counterReducer, })
export const store = createStore(reducers, composeWithDevTools())