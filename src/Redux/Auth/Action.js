import axios from "axios";
import { API_BASE_URL } from "../../config/api.js";
import {
    GET_USER_FAILURE,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./ActionTypes.js";

const jwt = localStorage.getItem("jwt");

export const register = (userData) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
    const user = response.data;

    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
    }
    console.log("register user", user);
    dispatch({ type: REGISTER_SUCCESS, payload: user });
  } catch (error) {
    dispatch({ type: REGISTER_FAILURE, payload: error.message });
  }
};

export const login = (userData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signin`,userData);
    const user = response.data;
    if(user.jwt){
        localStorage.setItem("jwt",user.jwt);
    }
    console.log("login user",user);
    dispatch({type:LOGIN_SUCCESS,payload:user});
  } catch (error) {
    dispatch({type:LOGIN_FAILURE,payload:error.message});    
  }
};

export const getUser = (jwt) => async(dispatch) => {
    dispatch({type: GET_USER_REQUEST});
    try {
        const response = await axios.get(`${API_BASE_URL}/api/users/profile`,{
            headers: {
                "Authorization": `Bearer ${jwt}`,
            },
        });

        const user = response.data;
        console.log("get user",user);
        dispatch({type: GET_USER_SUCCESS,payload: user});
    } catch (error) {
        dispatch({type: GET_USER_FAILURE,payload: error.message});
    }
}

export const logout = () => async(dispatch) => {
    dispatch({type:LOGOUT});
    localStorage.clear();
}