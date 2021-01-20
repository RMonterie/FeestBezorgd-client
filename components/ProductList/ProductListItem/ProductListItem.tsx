import { useDispatch } from "react-redux";
import { addProductToCart } from "../../../redux/actions/cartActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./ProductListItem.scss";
import Button from "../../Button";

interface ProductListItemProps {
  name: string;
  price: number;
  catererName: string;
}

/**
 * Component that displays given product details in a card.
 */
const ProductListItem: React.FC<ProductListItemProps> = ({
  name,
  price,
  catererName,
}) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(
      addProductToCart({
        name: name,
        price: price,
        quantity: 1,
        caterer: catererName,
      })
    );
  };

  return (
    <div className="product-container">
      <div>
        <p className="name">{name}</p>
        <div className="price">{`€${price},-`}</div>
        <Button
          style="btn--add--solid"
          icon={faPlus}
          onClick={onClickHandler}
        />
      </div>
      <img
        src="https://images.pexels.com/photos/853006/pexels-photo-853006.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        height={160}
        width={160}
      />
    </div>
  );
};

export default ProductListItem;
