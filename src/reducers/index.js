import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import productReducer from './productReducer';

export default combineReducers({
    product:productReducer
})
// create redux in react?