import PageLink from "../../page/PageLink";

interface NavLinkItemProps {
  to: string;
  label: string;
}

const NavLinkItem: React.FC<NavLinkItemProps> = ({ to, label }) => {
  return (
    <li>
      <PageLink to={to}>{label}</PageLink>
    </li>
  );
};

export default NavLinkItem;
