import { useSelector, useDispatch } from "react-redux";

import { deAuthenticate } from "../../../redux/actions/authActions";
import PageLink from "../PageLink";

import "./PageHeader.scss";

/**
 * Page header containing navigation.
 *
 * @returns {JSX.Element}
 */
//TODO Implement the login/register modal to here
const PageHeader = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state) => state.authentication.isAuthenticated
  );

  const logOutHandler = () => {
    dispatch(deAuthenticate());
    localStorage.clear();
  };

  return (
    <header id="page-header">
      <nav>
        <PageLink to="/" className="title">
          Feestbezorgd
        </PageLink>
        <ul className="nav">
          {!isAuthenticated == true && (
            <li>
              <PageLink to="/login">Login</PageLink>
            </li>
          )}
          <li>
            <PageLink to="/caterers">Caterers</PageLink>
          </li>
        </ul>
      </nav>
      {isAuthenticated == true && (
        <button onClick={logOutHandler}>Log out</button>
      )}
    </header>
  );
};

export default PageHeader;
