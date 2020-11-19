import ProductForm from "../../components/ProductForm";

import BaseLayout from "../../layout/BaseLayout";

const Products = () => {
  return (
    <BaseLayout title="Find a caterer">
      <h2 className="page-title">Caterers</h2>
      <ProductForm />
    </BaseLayout>
  );
};

export default Products;
