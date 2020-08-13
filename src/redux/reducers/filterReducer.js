import * as type from '../constant/ActionTypes';
let initialState = [];

export default function(state = initialState,action){
    switch(action.type){
        case type.ADD_FILTER_ITEM:
            const value = action.value;
            const status = action.status;
            if(!!status){
                state.push(value)
            }
            return [...state];
        case type.CLEAR_FILTER_ITEM:
            state = [];
            return [...state];
        default:
            return state;
    }
}