import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import NavLinkItem from "../../NavBar/NavLinkItem/NavLinkItem";
import PageLink from "../PageLink";
import NavBar from "../../NavBar/NavBar";

import "./PageHeader.scss";
import NavDropdownItem from "../../NavBar/NavDropdownItem/NavDropdownItem";
import UserDropDownMenu from "../../UserDropdownMenu";
import MiniShoppingCartDropdownMenu from "../../MiniShoppingCartDropdownMenu";

/**
 * Page header containing navigation.
 *
 * @returns {JSX.Element}
 */
//TODO Implement the login/register modal to here
const PageHeader: React.FC = () => {
  const [user, setUser] = useState({ name: "", address: "", email: "" });
  const isAuthenticated = useSelector(
    (state) => state.authentication.isAuthenticated
  );

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  return (
    <header id="page-header">
      <div className="title">
        <PageLink to="/">Feestbezorgd</PageLink>
      </div>
      <div>
        <NavBar>
          <NavLinkItem to="/caterers" label="Caterers" />
          {isAuthenticated ? (
            <NavDropdownItem
              label={`${user.name}`}
              icon={<FontAwesomeIcon icon={faUser} />}
              dropdown={
                <UserDropDownMenu
                  authenticated={true}
                  name={user.name}
                  address={user.address}
                  email={user.email}
                />
              }
            />
          ) : (
            <NavDropdownItem
              label={`Log in`}
              icon={<FontAwesomeIcon icon={faUser} />}
              dropdown={<UserDropDownMenu authenticated={false} />}
            />
          )}
          <NavDropdownItem
            icon={<FontAwesomeIcon icon={faShoppingCart} />}
            dropdown={<MiniShoppingCartDropdownMenu />}
          />
        </NavBar>
      </div>
    </header>
  );
};

export default PageHeader;
