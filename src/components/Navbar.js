import React from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="navbar">
            <Link className="navbar__link" to="/">Home</Link>
            <Link className="navbar__link" to="/about">About</Link>
            <Link className="navbar__link" to="/products">Products</Link>
        </div>
    )
}

export default Navbar
