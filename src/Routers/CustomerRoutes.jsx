import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navigation from '../Customer/Components/Navbar/Navigation';
import Home from '../Customer/Components/Home/Home';
import Footer from '../Customer/Components/Footer/Footer';
import Product from '../Customer/Components/Product/Product/Product'
import ProductDetails from '../Customer/Components/Product/ProductDetails/ProductDetails'
import Cart from '../Customer/Components/Cart/Cart'
import Order from '../Customer/Components/Orders/Order'
import OrderDetails from '../Customer/Components/Orders/OrderDetails'
import Checkout from '../Customer/Components/Checkout/Checkout'
import PaymentSuccess from '../Customer/Components/PaymentSuccess/PaymentSuccess';

function CustomerRoutes() {
    const location = useLocation();
    const showNavigation = location.pathname !== "*";
  return (
    <div>
        {showNavigation && <Navigation/>}
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Home/>}></Route>
            <Route path="/register" element={<Home />}></Route>
            <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />}></Route>
            <Route path="/product/:productId" element={<ProductDetails />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/account/order" element={<Order />}></Route>
            <Route path="/account/order/:orderId" element={<OrderDetails />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route path="/payment/:orderId" element={<PaymentSuccess />}></Route>
        </Routes>
        <Footer/>
    </div>
  )
}

export default CustomerRoutes