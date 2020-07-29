import {createStore} from 'redux';
import myReducer from './reducer/index';
import productsReducer from './reducer/index';
const store = createStore(
    productsReducer
);
export default store;