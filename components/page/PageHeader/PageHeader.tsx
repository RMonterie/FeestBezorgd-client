import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { deAuthenticate } from "../../../redux/actions/authActions";
import NavLinkItem from "../../NavBar/NavLinkItem/NavLinkItem";
import PageLink from "../PageLink";
import NavBar from "../../NavBar/NavBar";

import "./PageHeader.scss";
import NavDropdownItem from "../../NavBar/NavDropdownItem/NavDropdownItem";
import DropdownMenu from "../../DropdownMenu";

/**
 * Page header containing navigation.
 *
 * @returns {JSX.Element}
 */
//TODO Implement the login/register modal to here
const PageHeader = () => {
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  // const dispatch = useDispatch();
  // const isAuthenticated = useSelector(
  //   (state) => state.authentication.isAuthenticated
  // );

  // const logOutHandler = () => {
  //   dispatch(deAuthenticate());
  //   localStorage.clear();
  // };

  return (
    <header id="page-header">
      {/* <nav>
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
      {modalIsOpen && <div>de modal is wahed open</div>} */}
      <div className="title">
        <PageLink to="/">FeestBezorgd</PageLink>
      </div>
      <div>
        <NavBar>
          <NavLinkItem to="/products" label="My Products" />
          <NavLinkItem to="/caterers" label="Caterers" />
          <NavDropdownItem label="🙍‍♂️" dropdown={<DropdownMenu />} />
        </NavBar>
      </div>
    </header>
  );
};

export default PageHeader;
