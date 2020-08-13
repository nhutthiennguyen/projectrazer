import * as type from '../constant/ActionTypes';

export const addFilter = (value,status) =>{
    return {
        type: type.ADD_FILTER_ITEM,
        value, status
    }
}
export const addToCart = (product,quantity) =>{
    return {
        type: type.ADD_TO_CART,
        product,
        quantity
    }
}
export const removeCartItem = (product) =>{
    return {
        type: type.REMOVE_ITEM,
        product
    }
}
export const increaseCartItem = (product,quantity) =>{
    return {
        type: type.INCREASE_ITEM,
        product,
        quantity
    }
}
export const decreaseCartItem = (product,quantity) =>{
    return {
        type: type.DECREASE_ITEM,
        product,
        quantity
    }
}
export const clearFilterItem = () =>{
    return {
        type: type.CLEAR_FILTER_ITEM
    }
}