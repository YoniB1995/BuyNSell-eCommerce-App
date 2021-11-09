import * as actionTypes from '../constants/productConstants'
import axios from 'axios'

export const getProductsByType = (type) => async(dispatch) =>
{ 
    try {
        dispatch({type:actionTypes.GET_PRODUCTS_REQUEST})

        const {data} = await axios.get(`/products/${type}`);

        dispatch({
            type: actionTypes.GET_PRODUCTS_SUCCESS,
            payload:data
        })

    }catch (error) {
        dispatch({
        type: actionTypes.GET_PRODUCTS_FAIL,
        payload: 
        error.response && error.response.data.message
        ? error.response.data.message : error.message,
    });
    }
}

export const getProductById = (id) => async(dispatch) =>
{ 
    try {
        dispatch({type:actionTypes.GET_PRODUCT_DETAILS_REQUEST})

        const {data} = await axios.get(`/products/item/${id}`);

        dispatch({
            type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
            payload:data
        })

    }catch (error) {
        dispatch({
        type: actionTypes.GET_PRODUCTS_FAIL,
        payload: 
        error.response && error.response.data.message
        ? error.response.data.message : error.message,
    });
    }
}

export const removeProductDetails = () => (dispatch) => {
    dispatch({
        type:actionTypes.GET_PRODUCT_DETAILS_RESET,
    })
}