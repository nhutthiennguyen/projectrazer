import * as types from '../actions/filterAction';
let initialState = [];


export default function(state = initialState,action){
    switch(action.type){
        case types.FILTER_PRODUCT:
           console.log(action)
            return [...state];
        default:
            return state;
    }
}