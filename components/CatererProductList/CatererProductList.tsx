import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { faPen, faTrashAlt, faTimes } from "@fortawesome/free-solid-svg-icons";

import { removeProductFromCatalogue } from "../../api/caterers/catererMethods";
import { openModal, closeModal } from "../../redux/actions/modalActions";
import ProductForm from "../Forms/ProductForm";
import Button from "../Button";

import "./CatererProductList.scss";

const CatererProductList = ({ catererProducts }) => {
  const [productName, setProductName] = useState();
  const [productPrice, setProductPrice] = useState();
  const isModalOpen = useSelector((state) => state.modal.isOpen);
  const modalType = useSelector((state) => state.modal.type);
  const dispatch = useDispatch();

  const onClickDeleteHandler = async (name, price) => {
    removeProductFromCatalogue(name, price);
  };

  return (
    <div className="list-container">
      <div>
        {catererProducts.map((product, index) => (
          <li key={index} className="product-list-item">
            <div className="product-details">
              <p className="product-name">{product.name}</p>
              <p>{`€${product.price},-`}</p>
            </div>
            <div className="button-group">
              <Button
                onClick={() => {
                  dispatch(openModal("editProduct"));
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
                  dispatch(openModal("deleteProduct"));
                  setProductName(product.name);
                  setProductPrice(product.price);
                }}
                text="Delete"
                icon={faTrashAlt}
              />
            </div>
          </li>
        ))}

        {isModalOpen && modalType == "deleteProduct" && (
          <Modal
            isOpen={isModalOpen}
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
                onClick={() => {
                  onClickDeleteHandler(productName, productPrice);
                  dispatch(closeModal());
                }}
              />
              <Button
                style="btn--danger--solid"
                text="No"
                onClick={() => dispatch(closeModal())}
              />
            </div>
          </Modal>
        )}
        {isModalOpen && modalType == "editProduct" && (
          <Modal
            isOpen={isModalOpen}
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
                onClick={() => dispatch(closeModal())}
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
        )}
      </div>
    </div>
  );
};

export default CatererProductList;
