import PageLink from "../PageLink";

import "./PageFooter.module.scss";
/**
 * Page footer.
 *
 * @returns {JSX.Element}
 */

const PageFooter = () => {
  return (
    <footer id="page-footer">
      <div className="pageFooter--container">
        <div className="pageFooter--navigation">
          <p className="pageFooter--navigationTitle">Sitemap</p>
          <ul>
            <li className="pageFooter--navigationItem">
              <PageLink to="login">Login</PageLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
