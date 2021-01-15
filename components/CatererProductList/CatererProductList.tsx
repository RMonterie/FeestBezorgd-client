import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { faPen, faTrashAlt, faTimes } from "@fortawesome/free-solid-svg-icons";

import { removeProductFromCatalogue } from "../../api/caterers/catererMethods";
import ProductForm from "../ProductForm";
import Button from "../Button";

import "./CatererProductList.scss";

const CatererProductList = ({ catererProducts }) => {
  const [showEditProduct, setShowEditProduct] = useState(false);
  const [showDeleteProduct, setShowDeleteProduct] = useState(false);
  const [productName, setProductName] = useState();
  const [productPrice, setProductPrice] = useState();

  const onClickHandler = () => {
    setShowEditProduct(false);
  };

  const onClickDeleteHandler = async (name, price) => {
    removeProductFromCatalogue(name, price);
    setShowDeleteProduct(false);
  };

  return (
    <div className="list-container">
      <div>
        {catererProducts.map((product, index) => (
          <li key={index} className="product-list-item">
            <div className="product-details">
              <p className="product-name">{product.name}</p>
              <p>{`€${product.price}`}</p>
            </div>
            <div className="button-group">
              <Button
                onClick={() => {
                  setShowEditProduct(true);
                  setProductName(product.name);
                  setProductPrice(product.price);
                }}
                style="btn--secondary--solid"
                text="Edit"
                icon={faPen}
              />
              <Button
                style="btn--danger--solid"
                onClick={() => {
                  setShowDeleteProduct(true);
                  setProductName(product.name);
                  setProductPrice(product.price);
                }}
                text="Delete"
                icon={faTrashAlt}
              />
            </div>
          </li>
        ))}

        <Modal
          isOpen={showDeleteProduct}
          style={{
            overlay: {
              background: "rgba(17, 17, 17, 0.63)",
            },
            content: {
              width: "400px",
              height: "150px",
              top: "30%",
              left: "40%",
            },
          }}
        >
          <h2>Are you sure you want to delete this product ?</h2>
          <div className="delete-product-group">
            <Button
              style="btn--success--solid"
              text="Yes"
              onClick={() => onClickDeleteHandler(productName, productPrice)}
            />
            <Button
              style="btn--danger--solid"
              text="No"
              onClick={() => setShowDeleteProduct(false)}
            />
          </div>
        </Modal>
        <Modal
          isOpen={showEditProduct}
          style={{
            overlay: {
              background: "rgba(17, 17, 17, 0.63)",
            },
            content: {
              width: "300px",
              height: "250px",
              top: "30%",
              left: "40%",
            },
          }}
        >
          <div className="modal-header">
            <h2>{`Edit Product ${productName}`}</h2>
            <Button
              style="btn--danger--solid"
              icon={faTimes}
              onClick={() => setShowEditProduct(false)}
            />
          </div>
          <ProductForm
            productId={productName}
            productName={productName}
            productPrice={productPrice}
            edit={true}
            className="product-form"
          />
        </Modal>
      </div>
    </div>
  );
};

export default CatererProductList;
