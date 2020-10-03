import PageLink from "../PageLink";

import Style from "./PageHeader.module.scss";

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
        <ul className="nav-items">
          <li>
            <PageLink to="/login" className="">
              Login
            </PageLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default PageHeader;
