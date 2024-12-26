import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
const Header = () => {
    return (
        <header>
            <h1 id='title'>Product Store</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/carts">Cart</Link></li>
                    <li><Link to="/contacts">Contacts</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;