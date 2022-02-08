import React, { useContext } from 'react';
import { StateContext } from '../../context/State';
import ProductCard from './ProductCard';

const DisplayProduct = () => {
    const { products } = useContext(StateContext);
    return (
        <div className="display-product">
            <h2>Our Special Product</h2>

            <div className="display-product-container">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default DisplayProduct;
