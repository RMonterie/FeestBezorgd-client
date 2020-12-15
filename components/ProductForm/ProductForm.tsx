import React, { useState } from "react";

import { addProductToCatalogue } from "../../api/caterers/catererMethods";

import "./ProductForm.scss";

const ProductForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    addProductToCatalogue(name, price);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="productName">Product Name</label>
        <input
          type="text"
          name="productName"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />

        <label htmlFor="productPrice">Product Price</label>
        <input
          type="integer"
          name="productPrice"
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />

        <button type="submit">Add product</button>
      </form>
    </div>
  );
};

export default ProductForm;
