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
              <Link to="/" className="link">
                <h1 className="brand-name">ES Shopping</h1>
              </Link>
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
              <li>
                <Link to="/products" className="link">
                  Product
                </Link>
              </li>
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
