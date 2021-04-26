import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import NotFound from './components/NotFound';
import ProductDetails from './components/ProductDetails';

function RouteConfig() {
    return (
        
        <div>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/products" element={<Products />}></Route>
                <Route path="/:products/:id" element={<ProductDetails />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </div>
    )
}

export default RouteConfig
