import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { removeProductFromCatalogue } from "../../api/caterers/catererMethods";
import ProductForm from "../ProductForm";

const CatererProductList = ({ catererProducts }) => {
  const [showEditProduct, setShowEditProduct] = useState(false);
  const [showDeleteProduct, setShowDeleteProduct] = useState(false);
  const [productName, setProductName] = useState();
  const [productPrice, setProductPrice] = useState();

  const onClickHandler = async (event) => {
    event.preventDefault();
    console.log("PRINT");
    setShowEditProduct(false);
  };

  const onClickDeleteHandler = async (name, price) => {
    event.preventDefault();
    removeProductFromCatalogue(name, price);

    console.log("DELETE PRODUCT");
    setShowDeleteProduct(false);
  };

  return (
    <div className="list-container">
      <div>
        {catererProducts.map((product, index) => (
          <li key={index}>
            {product.name}, {product.price} $
            <button
              onClick={() => {
                setShowEditProduct(true);
                setProductName(product.name);
                setProductPrice(product.price);
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                setShowDeleteProduct(true);
                setProductName(product.name);
                setProductPrice(product.price);
              }}
            >
              Delete
            </button>
          </li>
        ))}

        <Modal isOpen={showDeleteProduct}>
          <h2>Are you sure you want to delete this product ?</h2>
          <div>
            <button
              onClick={() => onClickDeleteHandler(productName, productPrice)}
            >
              Yes
            </button>
            <button onClick={() => setShowDeleteProduct(false)}>No</button>
          </div>
        </Modal>
        <Modal isOpen={showEditProduct}>
          <ProductForm
            productId={productName}
            productName={productName}
            productPrice={productPrice}
            edit={true}
          />
          <div>
            <button onClick={() => setShowEditProduct(false)}>Close</button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default CatererProductList;
