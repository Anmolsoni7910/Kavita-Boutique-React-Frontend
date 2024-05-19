import { applyMiddleware,combineReducers,legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import {authReducer} from './Auth/Reducer.js'
import adminOrderReducer from './Admin/Orders/Reducer.js'
import adminProductReducer from './Admin/Product/Reducer.js'
import cartReducer from './Customers/Cart/Reducer.js'
import orderReducer from './Customers/Order/Reducer.js'
import productReducer from './Customers/Product/Reducer.js'
import ratingReducer from './Customers/Rating/Reducer.js'
import reviewReducer from './Customers/Review/Reducer.js'

const rootReducers = combineReducers({
    //auth
    auth: authReducer,

    //customer
    cart: cartReducer,
    order: orderReducer,
    product: productReducer,
    rating: ratingReducer,
    review: reviewReducer,

    //admin
    adminOrder: adminOrderReducer,
    adminProduct: adminProductReducer,
})


export const store = legacy_createStore(rootReducers,applyMiddleware(thunk));