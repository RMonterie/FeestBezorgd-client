import PageLink from "../PageLink";

import "./PageFooter.scss";
/**
 * Page footer.
 *
 * @returns {JSX.Element}
 */

const PageFooter: React.FC = () => {
  return (
    <footer id="page-footer">
      <div className="pageFooter--container">
        <div className="pageFooter--navigation">
          <h2>FeestBezorgd© all rights reserved</h2>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
