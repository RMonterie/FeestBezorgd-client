import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import {
  addProductToCatalogue,
  editProductFromCatalogue,
} from "../../api/caterers/catererMethods";

import Button from "../Button";

const ProductForm = ({
  productId,
  productName,
  productPrice,
  edit,
  className,
}) => {
  const [name, setName] = useState(productName);
  const [price, setPrice] = useState(productPrice);
  const { register, handleSubmit, errors, setValue } = useForm({
    mode: "onBlur",
  });

  const preFillForm = () => {
    setValue("productName", productName);
    setValue("productPrice", productPrice);
  };

  useEffect(() => {
    preFillForm();
  }, []);

  const onSubmitHandler = async (data) => {
    event.preventDefault();
    if (edit) {
      editProductFromCatalogue(productId, data.productName, data.productPrice);
    } else {
      addProductToCatalogue(data.productName, data.productPrice);
    }
    // console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className={className}>
      <div>
        <label htmlFor="productName">Product Name</label>
        <input
          type="text"
          name="productName"
          ref={register({ required: true })}
        />
        {errors.productName && (
          <p className="warning">This field is required!</p>
        )}
      </div>
      <div>
        <label htmlFor="productPrice">Product Price</label>
        <input
          type="number"
          name="productPrice"
          ref={register({ required: true })}
        />
      </div>
      {edit ? (
        <Button type="submit" text="Edit product" style="btn--success--solid" />
      ) : (
        <Button type="submit" text="Add product" style="btn--success--solid" />
      )}
    </form>
  );
};

export default ProductForm;
