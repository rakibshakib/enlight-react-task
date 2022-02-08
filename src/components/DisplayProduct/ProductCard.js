import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { StateContext } from "../../context/State";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(StateContext);
  return (
    <div className="product-card">
      <div className="card-body">
        <figure className="card-images">
          <img src={product.image} alt="" />
        </figure>
        <h4 className="card-title">{product.title}</h4>
        <h4 className="card-price">Price: $ {product.price}</h4>
        <div className="card-btn-group">
          <button className="details-btn">Details</button>
          <button onClick={() => addToCart(product)} className="addCartbtn">
            <span>Add To Cart </span>
            <AiOutlineShoppingCart className="card-btn-icon" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
