interface NavbarProps {
  children: React.ReactNode;
}

/**
 * Component that renders out a list of NavItems.
 *
 */
const NavBar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <nav className="nav-item-wrapper">
      <ul>{children}</ul>
    </nav>
  );
};

export default NavBar;
