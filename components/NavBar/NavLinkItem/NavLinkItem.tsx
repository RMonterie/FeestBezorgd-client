import PageLink from "../../page/PageLink";

interface navLinkItemProps {
  to: string;
  label: string;
}

const NavLinkItem: React.FC<navLinkItemProps> = ({ to, label }) => {
  return (
    <li>
      <PageLink to={to}>{label}</PageLink>
    </li>
  );
};

export default NavLinkItem;
