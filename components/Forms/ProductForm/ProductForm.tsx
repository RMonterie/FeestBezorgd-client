import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import {
  addProductToCatalogue,
  editProductFromCatalogue,
} from "../../../api/caterers/catererMethods";
import { closeModal } from "../../../redux/actions/modalActions";

import Button from "../../Button";

import "./ProductForm.scss";

interface ProductFormProps {
  productId?: number;
  productName?: string;
  productPrice?: number;
  productImageUrl?: string;
  edit?: boolean;
  className?: string;
}
/**
 * Form that is used on the my products of the caterer.
 * Used to either add or edit a product in a caterer's
 * catalogue.
 */
const ProductForm: React.FC<ProductFormProps> = ({
  productId,
  productName,
  productPrice,
  productImageUrl,
  edit,
  className,
}) => {
  const { register, handleSubmit, errors, setValue } = useForm({
    mode: "onBlur",
  });
  const dispatch = useDispatch();

  const preFillForm = () => {
    setValue("productName", productName);
    setValue("productPrice", productPrice);
    setValue("productImageUrl", productImageUrl);
  };

  useEffect(() => {
    preFillForm();
  }, []);

  const onSubmitHandler = async (data) => {
    event.preventDefault();
    if (edit) {
      editProductFromCatalogue(
        productId,
        data.productName,
        data.productPrice,
        data.productImageUrl
      );
      dispatch(closeModal());
    } else {
      addProductToCatalogue(
        data.productName,
        data.productPrice,
        data.productImageUrl
      );
      dispatch(closeModal());
    }
    dispatch(closeModal());
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
          <p className="product-form-warning">This field is required!</p>
        )}
      </div>
      <div>
        <label htmlFor="productPrice">Product Price</label>
        <input
          type="number"
          name="productPrice"
          ref={register({ required: true })}
        />
        {errors.productPrice && (
          <p className="product-form-warning">This field is required!</p>
        )}
      </div>
      <div>
        <label htmlFor="productImageUrl">Product ImageUrl</label>
        <input
          type="text"
          name="productImageUrl"
          ref={register({ required: true })}
        />
        {errors.productName && (
          <p className="product-form-warning">This field is required!</p>
        )}
      </div>
      <Button
        type="submit"
        text={edit ? "Edit" : "Add"}
        style="btn--success--solid"
      />
    </form>
  );
};

export default ProductForm;
