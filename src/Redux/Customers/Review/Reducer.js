import {
  CREATE_REVIEW_REQUEST,
  CREATE_REVIEW_SUCCESS,
  CREATE_REVIEW_FAILURE,
  GET_ALL_REVIEWS_REQUEST,
  GET_ALL_REVIEWS_SUCCESS,
  GET_ALL_REVIEWS_FAILURE,
} from "./ActionTypes.js";

const initialState = {
  reviews: [],
  error: "",
  loading: false,
};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_REVIEW_REQUEST:
    case GET_ALL_REVIEWS_REQUEST:
      return { ...state, loading: true, error: "" };
    case CREATE_REVIEW_SUCCESS:
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
        error: "",
      };
    case CREATE_REVIEW_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case GET_ALL_REVIEWS_SUCCESS:
      return {
        ...state,
        reviews: action.payload,
        error: "",
      };
    case GET_ALL_REVIEWS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reviewReducer;
