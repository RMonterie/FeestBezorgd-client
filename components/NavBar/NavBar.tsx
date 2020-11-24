interface NavbarProps {
  children: React.ReactNode;
}

const NavBar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <nav className="nav-item-wrapper">
      <ul>{children}</ul>
    </nav>
  );
};

export default NavBar;
