import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/actions/cart";

import "./ProductListItem.scss";

interface ProductListItemProps {
  name: string;
  price: number;
}

const ProductListItem: React.FC<ProductListItemProps> = ({ name, price }) => {
  const dispatch = useDispatch();

  return (
    <div className="product-container">
      <div className="name">{name}</div>
      <div className="price">{`€${price},-`}</div>
      <button
        onClick={() => {
          dispatch(addProductToCart({ name: name, price: price }));
        }}
      >
        Put in shopping basket
      </button>
    </div>
  );
};

export default ProductListItem;
