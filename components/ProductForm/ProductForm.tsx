import React, { useState } from "react";

import { addProductToCatalogue } from "../../api/caterers/catererMethods";

import "./ProductForm.scss";

const ProductForm = ({ productName, productPrice }) => {
  const [name, setName] = useState(productName);
  const [price, setPrice] = useState(productPrice);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    console.log("Adding product");
    addProductToCatalogue(name, price);
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

        <button type="submit">Add product</button>
      </form>
    </div>
  );
};

export default ProductForm;
