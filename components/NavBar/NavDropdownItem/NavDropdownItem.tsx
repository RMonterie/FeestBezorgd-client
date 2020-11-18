import { useState } from "react";

import "./NavDropdownItem.scss";

interface navDropdownItemProps {
  dropdown: React.ReactNode;
  label: string;
}

const NavDropdownItem: React.FC<navDropdownItemProps> = ({
  dropdown,
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  if (!dropdown) {
    return null;
  }

  return (
    <li>
      <span onClick={() => setIsOpen(!isOpen)} className="dropdown-button">
        {label}
      </span>
      {isOpen && dropdown}
    </li>
  );
};

export default NavDropdownItem;
