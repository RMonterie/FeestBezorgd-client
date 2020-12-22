import { faBrush } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";

import { getSingleCaterer } from "../../api/caterers/catererMethods";
import CatererProductList from "../../components/CatererProductList";
import ProductForm from "../../components/ProductForm/ProductForm";

import BaseLayout from "../../layout/BaseLayout";

const Products = () => {
  const [catererProducts, setCatererProducts] = useState([]);
  const [showAddProduct, setShowAddProduct] = useState(false);

  useEffect(() => {
    const getCaterer = async () => {
      const caterer = await getSingleCaterer();
      if (caterer) {
        setCatererProducts(caterer.data.products);
        console.log(catererProducts);
      }
    };

    getCaterer();
  }, []);

  const onClickHandler = async (event) => {
    event.preventDefault();
    console.log("PRINT");
    setShowAddProduct(true);
  };
  return (
    <BaseLayout title="Catalogue">
      <button onClick={onClickHandler}>Add a product to your catalogue</button>
      <Modal isOpen={showAddProduct}>
        <ProductForm />
        <div>
          <button onClick={() => setShowAddProduct(false)}>Close</button>
        </div>
      </Modal>
      {catererProducts.length > 0 ? (
        <CatererProductList catererProducts={catererProducts} />
      ) : (
        <h2>There are no products in your catalogue!</h2>
      )}
    </BaseLayout>
  );
};

export default Products;
