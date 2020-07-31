
export const PRODUCT_DETAIL = 'PRODUCT_DETAIL';

export const idProduct = (product)=>{
    return{
        type: PRODUCT_DETAIL,
        product
    }
}