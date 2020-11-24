import { useState } from "react";

import "./NavDropdownItem.scss";

interface NavDropdownItemProps {
  dropdown: React.ReactNode;
  label?: string;
  icon: React.ReactNode;
}

const NavDropdownItem: React.FC<NavDropdownItemProps> = ({
  dropdown,
  label,
  icon,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  if (!dropdown) {
    return null;
  }

  return (
    <li>
      <span onClick={() => setIsOpen(!isOpen)} className="dropdown-button">
        <i>{icon}</i>
        {label}
      </span>
      {isOpen && dropdown}
    </li>
  );
};

export default NavDropdownItem;
