import * as actionTypes from '../constants/productConstants'
import axios from 'axios'

export const API =
  process.env.NODE_ENV === "production"
    ? `https://buynsell-ecommerce-app.herokuapp.com`
    : "http://localhost:3000";

export const getAllShoes = () => async(dispatch) =>
{ 
    try {
        dispatch({type:actionTypes.GET_PRODUCTS_REQUEST})

        const {data} = await axios.get(`${API}/products/shoes`);

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

export const getAllScreens = () => async(dispatch) =>
{ 
    try {
        dispatch({type:actionTypes.GET_PRODUCTS_REQUEST})

        const {data} = await axios.get(`${API}/products/screens`);

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

export const getShoesDetails = (id) => async(dispatch) =>
{ 
    try {
        dispatch({type:actionTypes.GET_PRODUCT_DETAILS_REQUEST})

        const {data} = await axios.get(`${API}/products/shoe/${id}`);

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

export const getScreensDetails = (id) => async(dispatch) =>
{ 
    try {
        dispatch({type:actionTypes.GET_PRODUCT_DETAILS_REQUEST})

        const {data} = await axios.get(`${API}/products/screen/${id}`);

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