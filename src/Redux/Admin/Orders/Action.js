import { api } from "../../../config/api.js";

import {
  CANCELED_ORDER_FAILURE,
  CANCELED_ORDER_REQUEST,
  CANCELED_ORDER_SUCCESS,
  CONFIRMED_ORDER_FAILURE,
  CONFIRMED_ORDER_REQUEST,
  CONFIRMED_ORDER_SUCCESS,
  DELETE_ORDER_FAILURE,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  DELIVERED_ORDER_FAILURE,
  DELIVERED_ORDER_REQUEST,
  DELIVERED_ORDER_SUCCESS,
  GET_ORDERS_FAILURE,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  PLACED_ORDER_FAILURE,
  PLACED_ORDER_REQUEST,
  PLACED_ORDER_SUCCESS,
  SHIP_ORDER_FAILURE,
  SHIP_ORDER_REQUEST,
  SHIP_ORDER_SUCCESS
} from "./ActionTypes.js";

export const getOrders = (reqData) => async(dispatch) => {
    dispatch({type:GET_ORDERS_REQUEST});
    try {
        const response = await api.get('/api/admin/orders/');
        console.log("get all orders: ",response.data);
        dispatch({type:GET_ORDERS_SUCCESS,payload:response.data});
    } catch (error) {
        console.log("get all order error:",error.message);
        dispatch({type:GET_ORDERS_FAILURE,payload:error.message});
    }
}

export const confirmOrder = (orderId) => async(dispatch) => {
    dispatch({type:CONFIRMED_ORDER_REQUEST});
    try {
        const response = await api.put(`/api/admin/orders/${orderId}/confirmed`);
        console.log("confirm order:",response.data);
        dispatch({type:CONFIRMED_ORDER_SUCCESS,payload:response.data});
    } catch (error) {
        console.log("confirm order error:",error.message);
        dispatch({type:CONFIRMED_ORDER_FAILURE,payload:error.message});
    }
}

export const shipOrder = (orderId) => async(dispatch) => {
    dispatch({type:SHIP_ORDER_REQUEST});
    try {
        const response = await api.put(`/api/admin/orders/${orderId}/ship`);
        console.log("shipped order", response.data);
        dispatch({type:SHIP_ORDER_SUCCESS,payload: response.data});
    } catch (error) {
        console.log("Ship order error:",error.message);
        dispatch({type:SHIP_ORDER_FAILURE,payload:error.message});
    }
}

export const deliveredOrder = (orderId) => async(dispatch) => {
    dispatch({type:DELIVERED_ORDER_REQUEST});
    try {
        const response = await api.put(`/api/admin/orders/${orderId}/deliver`);
        console.log("delivered order", response.data);
        dispatch({type:DELIVERED_ORDER_SUCCESS,payload: response.data});
    } catch (error) {
        console.log("delivered order error:",error.message);
        dispatch({type:DELIVERED_ORDER_FAILURE,payload:error.message});
    }
}

export const cancelOrder = (orderId) => async(dispatch) => {
    dispatch({type:CANCELED_ORDER_REQUEST});
    try {
        const response = await api.put(`/api/admin/orders/${orderId}/cancel`);
        console.log("cancelled order", response.data);
        dispatch({type:CANCELED_ORDER_SUCCESS,payload: response.data});
    } catch (error) {
        console.log("cancelled order error:",error.message);
        dispatch({type:CANCELED_ORDER_FAILURE,payload:error.message});
    }
}

export const deleteOrder = (orderId) => async(dispatch) => {
    dispatch({type:DELETE_ORDER_REQUEST});
    try {
        const response = await api.put(`/api/admin/orders/${orderId}/delete`);
        console.log("delete order", response.data);
        dispatch({type:DELETE_ORDER_SUCCESS,payload: orderId});
    } catch (error) {
        console.log("delete order error:",error.message);
        dispatch({type:DELETE_ORDER_FAILURE,payload:error.message});
    }
}

export const placeOrder = (order) => async(dispatch) => {
    dispatch({type:PLACED_ORDER_REQUEST});
    try {
        const response = await api.put(`/api/admin/orders/`,order);
        console.log("placed order", response.data);
        dispatch({type:PLACED_ORDER_SUCCESS,payload: response.data});
    } catch (error) {
        console.log("placed order error:",error.message);
        dispatch({type:PLACED_ORDER_FAILURE,payload:error.message});
    }
}