import { useState } from "react";
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
  const [modalIsOpen, setModalIsOpen] = useState(false);
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
        <div
          onClick={() => setModalIsOpen(!modalIsOpen)}
          className="open-modal"
        >
          OPEN THE MODAL
        </div>
      </nav>
      {isAuthenticated == true && (
        <button onClick={logOutHandler}>Log out</button>
      )}
      {modalIsOpen && <div>de modal is wahed open</div>}
    </header>
  );
};

export default PageHeader;
