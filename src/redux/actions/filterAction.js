export const FILTER_PRODUCT = 'FILTER_PRODUCT';

export const AddFilter = (item)=>{
    return {
        type: FILTER_PRODUCT,
        item
    }
}