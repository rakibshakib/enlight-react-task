import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { StateContext } from "../../context/State";

const Navbar = () => {
  const { addedToCart } = useContext(StateContext);
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-wrap">
          <div className="navbar-brand">
            <h2>ES-Shopping</h2>
          </div>
          <div className="navbar-option">
            <div className="navbar-items">
              <li>
                <Link className='link' to="/">Home</Link>
              </li>
              <li>Product</li>
              <li>About Us</li>
              <li>Contact</li>
            </div>
            <Link className="link" to="/added-product">
              <div className="navbar-cart">
                <AiOutlineShoppingCart className="add-to-cart-icon" />
                <span>{addedToCart?.length}</span> &nbsp; item
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
