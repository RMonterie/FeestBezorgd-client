import PageLink from "../PageLink";

import "./PageHeader.scss";

/**
 * Page header containing navigation.
 *
 * @returns {JSX.Element}
 */
const PageHeader = () => {
  return (
    <header id="page-header">
      <nav>
        <PageLink to="/" className="title">
          Feestbezorgd
        </PageLink>
        <ul className="nav">
          <li>
            <PageLink to="/login">Login</PageLink>
          </li>
          <li>
            <PageLink to="/caterers">Caterers</PageLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default PageHeader;
