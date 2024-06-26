import {api} from '../../../config/api.js'

import {
    FIND_PRODUCTS_BY_CATEGORY_REQUEST,
    FIND_PRODUCTS_BY_CATEGORY_SUCCESS,
    FIND_PRODUCTS_BY_CATEGORY_FAILURE,
    FIND_PRODUCT_BY_ID_REQUEST,
    FIND_PRODUCT_BY_ID_SUCCESS,
    FIND_PRODUCT_BY_ID_FAILURE
} from './ActionTypes.js';

export const findProducts = (reqData) => async (dispatch) => {
    const {
      colors,
      sizes,
      minPrice,
      maxPrice,
      minDiscount,
      category,
      stock,
      sort,
      pageNumber,
      pageSize,
    } = reqData;
  
    try {
      dispatch({ type: FIND_PRODUCTS_BY_CATEGORY_REQUEST });
      // console.log("action category:",category);
      const { data } = await api.get(
        `/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}&category=${category}`
      );
  
      console.log("get product by category - ", data);
      dispatch({
        type: FIND_PRODUCTS_BY_CATEGORY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FIND_PRODUCTS_BY_CATEGORY_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const findProductById = (reqData) => async (dispatch) => {
    try {
      dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
      const { data } = await api.get(`/api/products/id/${reqData.productId}`);
  
      console.log("products by  id : ", data);
      dispatch({
        type: FIND_PRODUCT_BY_ID_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FIND_PRODUCT_BY_ID_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };