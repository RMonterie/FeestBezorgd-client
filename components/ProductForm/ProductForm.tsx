import "./ProductForm.scss";

import axios from "axios";

import { baseUrl } from "../../constants";
import { addProductToCatalogue } from "../../api/caterers/catererMethods";

const ProductForm = () => {
  var name;
  var price;

  const onSubmitHandler = async () => {
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
            name = event.target.value;
          }}
        />

        <label htmlFor="productPrice">Product Price</label>
        <input
          type="integer"
          name="productPrice"
          onChange={(event) => {
            price = event.target.value;
          }}
        />

        <button type="submit">Add product</button>
      </form>
    </div>
  );
};

export default ProductForm;
