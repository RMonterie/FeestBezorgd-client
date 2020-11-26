import PageLink from "../../page/PageLink";

interface NavLinkItemProps {
  to: string;
  label: string;
}

/**
 * Component that renders a link to a given url.
 *
 * @returns {JSX.Element}
 */
const NavLinkItem: React.FC<NavLinkItemProps> = ({ to, label }) => {
  return (
    <li>
      <PageLink to={to}>{label}</PageLink>
    </li>
  );
};

export default NavLinkItem;
