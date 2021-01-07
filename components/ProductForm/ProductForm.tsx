import React, { useState } from "react";

import {
  addProductToCatalogue,
  editProductFromCatalogue,
} from "../../api/caterers/catererMethods";

import "./ProductForm.scss";

const ProductForm = ({ productId, productName, productPrice, edit }) => {
  const [name, setName] = useState(productName);
  const [price, setPrice] = useState(productPrice);
  const id = productId;

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (edit) {
      console.log("Edit product");
      editProductFromCatalogue(productId, name, price);
    } else {
      console.log("Adding product");
      addProductToCatalogue(name, price);
    }
  };

  const ButtonReturn = () => {
    if (edit) {
      return <button type="submit">Edit product</button>;
    } else {
      return <button type="submit">Add product</button>;
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="productName">Product Name</label>
        <input
          type="text"
          name="productName"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />

        <label htmlFor="productPrice">Product Price</label>
        <input
          type="integer"
          name="productPrice"
          value={price}
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />

        <ButtonReturn />
      </form>
    </div>
  );
};

export default ProductForm;
