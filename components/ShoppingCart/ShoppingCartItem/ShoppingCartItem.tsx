import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import { removeProductFromCart } from "../../../redux/actions/cartActions";

import "./ShoppingCartItem.scss";
import Button from "../../Button";
interface ShoppingCartItemProps {
  name: string;
  price: number;
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
  index,
}) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(removeProductFromCart(index));
  };

  return (
    <li className="shoppingcart-item">
      <div>
        <h2>{name}</h2>
        <p>{`€${price},-`}</p>
        <p>Amount: 10</p>
      </div>
      <Button
        style="btn--secondary--solid"
        onClick={onClickHandler}
        icon={<FontAwesomeIcon icon={faTrashAlt} />}
      />
    </li>
  );
};

export default ShoppingCartItem;
