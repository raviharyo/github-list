import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'
import listReducer from './listReducer'

export const store = createStore(listReducer, applyMiddleware(thunk))