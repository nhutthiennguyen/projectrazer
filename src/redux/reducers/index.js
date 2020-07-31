import {combineReducers} from 'redux';
import productsReducer from './productsReducer';
import filterReducer from './filterReducer';

export default combineReducers({
    products : productsReducer,
    filterItem : filterReducer,
    product : productsReducer
})
