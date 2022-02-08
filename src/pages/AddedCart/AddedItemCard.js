import React, { useContext } from "react";
import { StateContext } from "../../context/State";

const AddedItemCard = ({ product }) => {
  const { removeFromCart } = useContext(StateContext);

  const removeItem = () => {
    const isConfirm = window.confirm(
      "Are you sure to remove this product from cart? "
    );
    if (isConfirm) {
      removeFromCart(product.id);
    }
  };
  return (
    <div>
      <div className="cart-body">
        <figure className="cart-image">
          <img src={product.image} alt="" />
        </figure>
        <div className="cart-productDetails">
          <div className="cart-details">
            <h4>{product.title}</h4>
            <p>Price: ${product.price}</p>
          </div>
          <div className="cart-btn">
            <button onClick={removeItem}>Remove From Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddedItemCard;
