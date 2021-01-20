import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

interface NavDropdownItemProps {
  dropdown: React.ReactNode;
  cartItemLength: number;
}

/**
 * Component that opens and closes MiniShoppingCartDropdown.
 *
 */
const CartDropdownItem: React.FC<NavDropdownItemProps> = ({
  dropdown,
  cartItemLength,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  if (!dropdown) {
    return null;
  }

  return (
    <li>
      <span onClick={() => setIsOpen(!isOpen)} className="dropdown-button">
        <i>
          <FontAwesomeIcon icon={faShoppingCart} />
        </i>
        {`(${cartItemLength})`}
      </span>
      {isOpen && dropdown}
    </li>
  );
};

export default CartDropdownItem;
