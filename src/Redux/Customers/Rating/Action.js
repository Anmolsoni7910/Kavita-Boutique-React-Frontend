import { api } from "../../../config/api.js";

import {
  CREATE_RATING_REQUEST,
  CREATE_RATING_SUCCESS,
  CREATE_RATING_FAILURE,
  GET_ALL_RATING_REQUEST,
  GET_ALL_RATINGS_SUCCESS,
  GET_ALL_RATINGS_FAILURE,
} from "./ActionTypes.js";


export const createRating = (reqData) => async(dispatch) => {
    dispatch({type: CREATE_RATING_REQUEST});
    try {
        const response = await api.post('/api/ratings/create'.reqData);
        console.log("rating created: ",response.data);
        dispatch({type:CREATE_RATING_SUCCESS,payload:Response.data});
    } catch (error) {
        dispatch({type:CREATE_RATING_FAILURE,payload:error.message});
    }
}

export const getAllRatings = (productId) => async(dispatch) => {
    dispatch({type: GET_ALL_RATING_REQUEST});
    try {
        const response = await api.get(`/api/ratings/product/${productId}`);
        console.log("all ratings ",response.data);
        dispatch({type:GET_ALL_RATINGS_SUCCESS,payload:response.data});
    } catch (error) {
        dispatch({type:GET_ALL_RATINGS_FAILURE,payload:error.message});
    }
}