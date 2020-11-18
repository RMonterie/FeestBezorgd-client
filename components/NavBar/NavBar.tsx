interface navBarProps {
  children: React.ReactNode;
}

const NavBar: React.FC<navBarProps> = ({ children }) => {
  return (
    <nav className="nav-item-wrapper">
      <ul>{children}</ul>
    </nav>
  );
};

export default NavBar;
