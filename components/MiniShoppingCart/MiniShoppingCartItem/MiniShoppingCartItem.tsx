import { useDispatch } from "react-redux";

import {
  removeProductFromCart,
  addProductToCart,
} from "../../../redux/actions/cartActions";
import Button from "../../Button";

import "./MiniShoppingCartItem.scss";

interface MiniShoppingCartItemProps {
  name: string;
  price: number;
  quantity: number;
  index: number;
}

/**
 * Component that displays a single item in the shopping cart.
 *
 * @returns {JSX.Element}
 */
const MiniShoppingCartItem: React.FC<MiniShoppingCartItemProps> = ({
  name,
  price,
  quantity,
  index,
}) => {
  const dispatch = useDispatch();

  const onAddProductHandler = () => {
    dispatch(addProductToCart({ name: name, price: price, quantity: 1 }));
  };

  return (
    <div className="mini-shoppingcart-item-container">
      <div>
        <p className="product-name">{name}</p>
        <p>{`€${price},-`}</p>
        <div className="quantity-container">
          <span className="quantity">Quantity:</span>
          <Button
            onClick={() => dispatch(removeProductFromCart(index))}
            style="btn--primary--solid"
            text="-"
          />
          <span className="quantity-value">{quantity}</span>
          <Button
            onClick={onAddProductHandler}
            style="btn--primary--solid"
            text="+"
          />
        </div>
      </div>
    </div>
  );
};

export default MiniShoppingCartItem;
