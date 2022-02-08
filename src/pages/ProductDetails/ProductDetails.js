import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { StateContext } from "../../context/State";
import { AiOutlineShoppingCart } from "react-icons/ai";

const ProductDetails = () => {
  const paramId = useParams();
  const [targetProducts, setTargetProducts] = useState({});
  const [currentImage, setCurrentImage] = useState(null);
  const { products, addToCart } = useContext(StateContext);
  useEffect(() => {
    const findProduct = products.find(
      (item) => item.id === parseInt(paramId.id)
    );
    setTargetProducts(findProduct);
    setCurrentImage(findProduct?.images[0]);
  }, [paramId, products]);
  return (
    <>
      <Navbar />
      <div className="product-container">
        <div className="details-display">
          <h3>Products details</h3>
          <div className="details-container">
            <div className="product-images">
              <div className="side-images">
                {targetProducts?.images?.map((img) => (
                  <img
                    onClick={() => setCurrentImage(img)}
                    src={img}
                    style={{
                      outline:
                        currentImage === img
                          ? "5px solid rgb(3, 118, 211)"
                          : null,
                    }}
                    alt=""
                    key={img}
                  />
                ))}
              </div>
              <div className="current-images">
                <img src={currentImage} alt="" />
              </div>
            </div>
            <div className="product-descriptions">
              <h4>{targetProducts.title}</h4>
              <p>
                <b>Price:</b> $ {targetProducts.price}
              </p>
              <p>
                <b>Category:</b> {targetProducts?.category}
              </p>

              <p>
                <b>Rating:</b> {targetProducts?.rating?.rate} &nbsp;- &nbsp; By
                Count: {targetProducts?.rating?.count}
              </p>
              <p>
                <b>Details:</b> {targetProducts?.description}
              </p>
              <button
                onClick={() => addToCart(targetProducts)}
                className="add-Cartbtn"
              >
                Add To Cart
                <AiOutlineShoppingCart className="card-btn-icon" />{" "}
              </button>
            </div>
          </div>

          <div className="product-Extra-descriptions">
            <p>
              <strong>Descriptions:</strong> &nbsp;
              {targetProducts?.description}
            </p>
            <p>
              {" "}
              <strong>More:</strong> &nbsp; Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Animi doloribus officiis magni ipsum
              deserunt eos fugiat doloremque sint quis enim a, aliquam dicta
              voluptatem asperiores illum, accusamus officia inventore vero fuga
              dolorem repudiandae exercitationem ad. Eum sed est quis. Maxime
              ipsa eos quisquam debitis saepe odit. Officiis voluptatibus sit
              et, iure possimus inventore dignissimos cum eaque quae porro
              suscipit, sunt deserunt consequatur eius, id at aspernatur
              corrupti quaerat ullam voluptatem illo? Asperiores, odit corporis
              ipsam doloremque distinctio adipisci fuga consequatur ratione
              aspernatur. Nulla optio officia recusandae quasi natus iure
              adipisci consequuntur sapiente, quis, accusamus a ipsam atque,
              architecto laboriosam minus.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
