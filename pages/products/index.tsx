import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

import { getCurrentCaterer } from "../../api/caterers/catererMethods";
import CatererProductList from "../../components/CatererProductList";
import ProductForm from "../../components/Forms/ProductForm";
import Button from "../../components/Button";

import BaseLayout from "../../layout/BaseLayout";

import "./ProductsPage.scss";

const ProductsPage = () => {
  const [catererProducts, setCatererProducts] = useState([]);
  const [showAddProduct, setShowAddProduct] = useState(false);

  useEffect(() => {
    const getCaterer = async () => {
      const caterer = await getCurrentCaterer();
      if (caterer) {
        setCatererProducts(caterer.data.products);
      }
    };

    getCaterer();
  }, [setCatererProducts]);

  const onClickHandler = () => {
    setShowAddProduct(true);
  };

  return (
    <BaseLayout title="Catalogue">
      <div className="page-contents">
        {catererProducts.length > 0 ? (
          <CatererProductList catererProducts={catererProducts} />
        ) : (
          <h2>There are no products in your catalogue!</h2>
        )}
        <Button
          onClick={onClickHandler}
          text="Add a new product"
          icon={faPlus}
          style="btn--primary--solid"
        />
        <Modal
          isOpen={showAddProduct}
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
        >
          <div className="modal-title">
            <h2>Add a product</h2>
            <Button
              onClick={() => setShowAddProduct(false)}
              icon={faTimes}
              style="btn--danger--solid"
            />
          </div>
          <ProductForm edit={false} className="product-form" />
        </Modal>
      </div>
    </BaseLayout>
  );
};

export default ProductsPage;
