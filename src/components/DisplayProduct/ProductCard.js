import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { StateContext } from '../../context/State';

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(StateContext);
    return (
        <div className="product-card">
            <div className="card-body">
                <figure className="card-images">
                    <img src={product.image} alt="" />
                </figure>
                <h4 className="card-title">{product.title}</h4>
                <h4 className='card-price'>Price: $ {product.price}</h4>
                <button onClick={() => addToCart(product)} className="card-btn">
                    <span>Add To Cart </span>
                    <AiOutlineShoppingCart className="card-btn-icon" />{' '}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
