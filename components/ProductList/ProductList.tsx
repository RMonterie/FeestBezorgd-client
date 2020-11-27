import ProductListItem from "./ProductListItem/ProductListItem";

import "./ProductList.scss";

interface ProductListProps {
  products: any;
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="list-container">
      {products.map((product, index) => (
        <ProductListItem
          key={index}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductList;
