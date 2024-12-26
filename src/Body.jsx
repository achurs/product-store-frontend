import React from 'react';
import products from './products.json';
import { useDispatch } from 'react-redux';
import { addToCart } from './actions';
import './body.css';
const Body = () => {
    const dispatch = useDispatch();
    return (
        <div id='body'>
            <h1>Welcome to the Product Store</h1>
            <p>Browse our collection of amazing products.</p>
            <div className="products">
                {products.map((product, index) => (
                    <div key={index} className="product-card">
                        <img src={product.img} alt={product.name} />
                        <div className="product-info">
                            <h2>{product.name}</h2>
                            <p>${product.price.toFixed(2)}</p>
                            <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Body;