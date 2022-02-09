import React, { useContext } from "react";
import Footer from "../../components/Footer/Footer";
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
          {
            addedToCart.length===0 && <h4>No Products added to cart</h4>
          }
          {addedToCart.map((product) => (
            <AddedItemCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddedCart;
