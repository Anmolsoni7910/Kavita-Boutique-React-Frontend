import {
  CREATE_RATING_REQUEST,
  CREATE_RATING_SUCCESS,
  CREATE_RATING_FAILURE,
  GET_ALL_RATING_REQUEST,
  GET_ALL_RATINGS_SUCCESS,
  GET_ALL_RATINGS_FAILURE,
} from "./ActionTypes.js";

const initialState = {
  ratings: [],
  error: "",
  loading: false,
};

const ratingReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_RATING_REQUEST:
    case GET_ALL_RATING_REQUEST:
      return { ...state, loading: true, error: "" };
    case CREATE_RATING_SUCCESS:
      return {
        ...state,
        ratings: [...state.ratings, action.payload],
        error: "",
      };
    case CREATE_RATING_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case GET_ALL_RATINGS_SUCCESS:
      return {
        ...state,
        ratings: action.payload,
        error: "",
      };
    case GET_ALL_RATINGS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default ratingReducer;