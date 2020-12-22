import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { removeProductFromCatalogue } from "../../api/caterers/catererMethods";
import ProductForm from "../ProductForm";

const CatererProductList = ({ catererProducts }) => {
  const [showEditProduct, setShowEditProduct] = useState(false);
  const [showDeleteProduct, setShowDeleteProduct] = useState(false);

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
        {catererProducts.map((product) => (
          <div>
            <h4>
              {product.name}, {product.price} $
            </h4>

            <Modal isOpen={showDeleteProduct}>
              <h2>Are you sure you want to delete this product ?</h2>
              <div>
                <button
                  onClick={() =>
                    onClickDeleteHandler(product.name, product.price)
                  }
                >
                  Yes
                </button>
                <button onClick={() => setShowDeleteProduct(false)}>No</button>
              </div>
            </Modal>

            <Modal isOpen={showEditProduct}>
              <ProductForm
                productName={product.name}
                productPrice={product.price}
              />
              <div>
                <button onClick={() => setShowEditProduct(false)}>Close</button>
              </div>
            </Modal>

            <button onClick={() => setShowEditProduct(true)}>Edit</button>
            <button onClick={() => setShowDeleteProduct(true)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatererProductList;
