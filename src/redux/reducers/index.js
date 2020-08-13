import {combineReducers} from 'redux';
import productsReducer from './productsReducer';
import filterReducer from './filterReducer';
import cartReducer from './cartReducer';

export default combineReducers({
    products : productsReducer,
    Item : filterReducer,
    product: cartReducer
})
