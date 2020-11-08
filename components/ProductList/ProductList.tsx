import ProductListItem from "../ProductListItem";

import "./ProductList.scss";

interface ProductListProps {
  products: any;
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="list-container">
      {products.map((product) => (
        <ProductListItem
          key={product.id}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductList;
