import { api } from "../../../config/api.js";
import {
  CREATE_REVIEW_FAILURE,
  CREATE_REVIEW_REQUEST,
  CREATE_REVIEW_SUCCESS,
  GET_ALL_REVIEWS_FAILURE,
  GET_ALL_REVIEWS_REQUEST,
  GET_ALL_REVIEWS_SUCCESS,
} from "./ActionTypes.js";

export const createReview = (reqData) => async (dispatch) => {
  dispatch({ type: CREATE_REVIEW_REQUEST });
  try {
    const response = await api.post("/api/reviews/create", reqData);
    console.log("create review ", response.data);
    dispatch({ type: CREATE_REVIEW_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: CREATE_REVIEW_FAILURE, payload: error.message });
  }
};

export const getAllReviews = (productId) => async (dispatch) => {
  dispatch({ type: GET_ALL_REVIEWS_REQUEST });
  try {
    const response = await api.get(`/api/reviews/product/${productId}`);
    console.log("all reviews ", response.data);
    dispatch({ type: GET_ALL_REVIEWS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_ALL_REVIEWS_FAILURE, payload: error.message });
  }
};
