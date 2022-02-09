import React, { useContext } from "react";
import ProductCard from "../../components/DisplayProduct/ProductCard";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { StateContext } from "../../context/State";

const Products = () => {
  const { products } = useContext(StateContext);

  return (
    <>
      <Navbar />
      <div className="banner">
        <div className="display-product">
          <h2>Our All Products</h2>

          <div className="display-product-container">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
