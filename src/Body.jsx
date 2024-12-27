import React,{ useState } from 'react';
import products from './products.json';
import { useDispatch } from 'react-redux';
import { addToCart } from './actions';
import './body.css';
const Body = () => {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentItems = products.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(products.length / itemsPerPage);
    const handleNextPage = () => {
        if(currentPage < totalPages){
            setCurrentPage(currentPage +1);
        }
    };
    const handlePrevPage = () => {
        if(currentPage > 1){
            setCurrentPage(currentPage -1);
        }
    };

    return (
        <div id='body'>
            <h1>Welcome to the Product Store</h1>
            <p>Browse our collection of amazing products.</p>
            <div className="products">
                {currentItems.map((product, index) => (
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
            <div className="pagination">
                <button onClick={handlePrevPage} disabled={currentPage===1}>Prev</button>
                <span>{currentPage}</span>
                <button onClick={handleNextPage} disabled={currentPage=== totalPages} >Next</button>
            </div>
        </div>
    );
};

export default Body;