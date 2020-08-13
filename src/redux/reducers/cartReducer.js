import * as type from '../constant/ActionTypes';
let cartProduct = JSON.parse(localStorage.getItem('CART_PRODUCT'));
let initialState = cartProduct ? cartProduct : [];

export default function (state = initialState, action) {
    const { product, quantity } = action;
    switch (action.type) {
        case type.ADD_TO_CART:
          
                state.push({
                    product,
                    quantity
                })
          
            localStorage.setItem('CART_PRODUCT', JSON.stringify(state));
            return [...state];
        case type.REMOVE_ITEM:
            const removeProduct = state.filter(pro => pro.id === product.id);
            state.splice(removeProduct, 1);
            localStorage.setItem('CART_PRODUCT', JSON.stringify(state));
            return [...state];
        case type.INCREASE_ITEM:
           const incProduct = state.map(pro => {
                if(pro.product.id === product.product.id){
                    pro = {...pro, quantity: quantity + 1}
                }
                
                return pro;
            });
            state = incProduct;
            localStorage.setItem('CART_PRODUCT', JSON.stringify(state));
            return [...state];
        case type.DECREASE_ITEM:
            const decProduct = state.map(pro => {
                if(pro.product.id === product.product.id && quantity > 1 ){
                    pro = {...pro, quantity: quantity - 1}
                }
                return pro;
            });
            state = decProduct;
            localStorage.setItem('CART_PRODUCT', JSON.stringify(state));
            return [...state];
        default:
            return [...state];
    }
}

