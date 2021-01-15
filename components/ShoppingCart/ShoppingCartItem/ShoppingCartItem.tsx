import { useDispatch } from "react-redux";

import {
  removeProductFromCart,
  addProductToCart,
} from "../../../redux/actions/cartActions";

import "./ShoppingCartItem.scss";
import Button from "../../Button";
interface ShoppingCartItemProps {
  name: string;
  price: number;
  quantity: number;
  index: number;
}

/**
 * List item that gets displayed in the shopping cart
 *
 * @returns {JSX.Element}
 */
const ShoppingCartItem: React.FC<ShoppingCartItemProps> = ({
  name,
  price,
  quantity,
  index,
}) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(removeProductFromCart(index));
  };

  const onAddHandler = () => {
    dispatch(addProductToCart({ name: name, price: price, quantity: 1 }));
  };

  return (
    <li className="shoppingcart-item">
      <div>
        <h2>{name}</h2>
        <p>{`€${price},-`}</p>
      </div>
      <div>
        <Button text="-" style="btn--primary--solid" onClick={onClickHandler} />
        <span>{quantity}</span>
        <Button text="+" style="btn--primary--solid" onClick={onAddHandler} />
      </div>
    </li>
  );
};

export default ShoppingCartItem;
