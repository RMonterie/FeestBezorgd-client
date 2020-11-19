import "./ProductForm.scss";

const ProductForm = () => {
  const onSubmitHandler = () => {};

  return (
    <div>
      <form onSubmit={onSubmitHandler}></form>
      <label htmlFor="productName">Product Name</label>
      <input type="text" name="productName" />

      <label htmlFor="productPrice">Product Price</label>
      <input type="integer" name="productPrice" />
    </div>
  );
};

export default ProductForm;
