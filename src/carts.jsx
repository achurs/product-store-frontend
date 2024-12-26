import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './carts.css';
function Carts() {
    const cart = useSelector((state) => state.cart);
    useEffect(() => {
        console.log(cart);
    }, [cart]);
    const buttonClick = () => {
        alert('Thank you for shopping with us');
    };
    return (
        <>
        <div id='carts'>
            <h1>Carts</h1>
            <ul>
                {Object.keys(cart).map((key) => (
                    <li key={key}>
                        <img src={cart[key].img} alt={cart[key].name} width="50" height="50" />
                        {cart[key].name} - ${cart[key].price.toFixed(2)} - {cart[key].quantity}
                    </li>
                ))}
            </ul>
            <button onClick={buttonClick}>Buy Now</button>
        </div>
        </>
    );
}
export default Carts;