import ProductListItem from "./ProductListItem/ProductListItem";

import "./ProductList.scss";

interface ProductListProps {
  products: any;
  catererName: string;
}

/**
 * List that renders the products of a caterer
 * as ProductListItems. For customer use.
 */
const ProductList: React.FC<ProductListProps> = ({ products, catererName }) => {
  return (
    <div className="list-container">
      {products.map((product, index) => (
        <ProductListItem
          key={index}
          name={product.name}
          price={product.price}
          catererName={catererName}
        />
      ))}
    </div>
  );
};

export default ProductList;
