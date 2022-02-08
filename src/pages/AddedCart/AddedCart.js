import React, { useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { StateContext } from "../../context/State";
import AddedItemCard from "./AddedItemCard";

const AddedCart = () => {
  const { addedToCart } = useContext(StateContext);

  return (
    <div>
      <Navbar />
      <div className="added-cart-container">
        <div className="addedCart">
          {addedToCart.map((product) => (
            <AddedItemCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddedCart;
