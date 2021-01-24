import { createStore, combinedReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combinedReducers({});
const initialState = {};
const store = createStore(reducers, initialState);
