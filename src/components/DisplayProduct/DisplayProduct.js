import React, { useContext, useState } from "react";
import { StateContext } from "../../context/State";
import Paginate from "../Paginate/Paginate";
import ProductCard from "./ProductCard";

const DisplayProduct = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 6;
  const { products } = useContext(StateContext);

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const getCurrentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const paginateHandeler = (num) => {
    setCurrentPage(num);
  };
  return (
    <div className="display-product">
      <h2>Our Special Product</h2>

      <div className="display-product-container">
        {getCurrentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Paginate
        productPerPage={productPerPage}
        totalProduct={products.length + 1}
        paginateHandeler={paginateHandeler}
      />
    </div>
  );
};

export default DisplayProduct;
