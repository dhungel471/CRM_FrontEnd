import {createStore, applyMiddleware} from 'redux';
import bookReducer from './reducers/bookReducer';
import thunk from "redux-thunk";


export const store = createStore(bookReducer, applyMiddleware(thunk));