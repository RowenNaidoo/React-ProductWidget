import * as actionTypes from './actionTypes';
import ProductApi from '../api/productApi';

export function getProductSuccess(product) {
    return { type: actionTypes.GET_PRODUCT_SUCCESS, product };
}

export function getProduct() {
    return function(dispatch) {
        return ProductApi.getProduct()
        .then(response => {
            dispatch(getProductSuccess(response));
        })
        .catch(error => {
            throw(error);
        });
    };   
}