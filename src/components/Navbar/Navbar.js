import React, { useContext, useState } from "react";
import { AiOutlineShoppingCart, AiOutlineBars } from "react-icons/ai";
import { Link } from "react-router-dom";
import { StateContext } from "../../context/State";

const Navbar = () => {
  const { addedToCart } = useContext(StateContext);

  const [toggle, setToogle] = useState(false);
  // toogle button handeler
  const handleToggle = () => {
    setToogle((toggle) => !toggle);
  };
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-wrap">
          <div className="responsive-bar">
            <div className="navbar-brand">
              <h2>ES-Shopping</h2>
            </div>
            <button onClick={handleToggle} className="toggle">
              <AiOutlineBars />
            </button>
          </div>

          <div
            className={`navbar-option  ${toggle ? "show-navs" : "hide-navs"}`}
          >
            <div className="navbar-items">
              <li>
                <Link className="link" to="/">
                  Home
                </Link>
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
