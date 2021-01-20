import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

import { getCurrentCaterer } from "../../api/caterers/catererMethods";
import { openModal, closeModal } from "../../redux/actions/modalActions";
import CatererProductList from "../../components/CatererProductList";
import ProductForm from "../../components/Forms/ProductForm";
import Button from "../../components/Button";

import BaseLayout from "../../layout/BaseLayout";

import "./ProductsPage.scss";

/**
 * Page for caterer that displays their products and allows CRUD operations
 * on these products.
 *
 */
const ProductsPage: React.FC = () => {
  const [catererProducts, setCatererProducts] = useState([]);
  const isModalOpen = useSelector((state) => state.modal.isOpen);
  const modalType = useSelector((state) => state.modal.type);
  const dispatch = useDispatch();

  //Call api, set products on first render and call api and setProducts when modal state changes.
  useEffect(() => {
    if (isModalOpen) {
      return;
    }
    const getCaterer = async () => {
      const caterer = await getCurrentCaterer();
      if (caterer) {
        setCatererProducts(caterer.data.products);
      }
    };

    getCaterer();
  }, [setCatererProducts, isModalOpen]);

  return (
    <BaseLayout title="My products">
      <div className="page-contents">
        <h2 className="catalogue-title">Manage your products</h2>
        {catererProducts.length > 0 ? (
          <CatererProductList catererProducts={catererProducts} />
        ) : (
          <h2>There are no products in your catalogue!</h2>
        )}
        <Button
          onClick={() => dispatch(openModal("addProduct"))}
          text="Add a new product"
          icon={faPlus}
          style="btn--primary--solid"
        />
        {isModalOpen && modalType == "addProduct" && (
          <Modal
            isOpen={isModalOpen}
            style={{
              overlay: {
                background: "rgba(17, 17, 17, 0.63)",
              },
              content: {
                width: "200px",
                height: "250px",
                top: "30%",
                left: "45%",
                overflow: "hidden",
              },
            }}
            onRequestClose={() => dispatch(closeModal())}
            shouldCloseOnOverlayClick={true}
          >
            <div className="modal-title">
              <h2>Add a product</h2>
              <Button
                onClick={() => dispatch(closeModal())}
                icon={faTimes}
                style="btn--danger--solid"
              />
            </div>
            <ProductForm edit={false} className="product-form" />
          </Modal>
        )}
      </div>
    </BaseLayout>
  );
};

export default ProductsPage;
