import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import NavLinkItem from "../../NavBar/NavLinkItem/NavLinkItem";
import PageLink from "../PageLink";
import NavBar from "../../NavBar/NavBar";

import NavDropdownItem from "../../NavBar/NavDropdownItem/NavDropdownItem";
import CartDropdownItem from "../../NavBar/CartDropdownItem/CartDropdownItem";
import UserDropDownMenu from "../../UserDropdownMenu";
import MiniShoppingCartDropdownMenu from "../../MiniShoppingCartDropdownMenu";

import "./PageHeader.scss";

/**
 * Page header containing navigation.
 *
 * @returns {JSX.Element}
 */
//TODO Implement the login/register modal to here
const PageHeader: React.FC = () => {
  const [user, setUser] = useState({
    name: "",
    address: "",
    username: "",
    email: "",
    role: "",
  });
  const isAuthenticated = useSelector(
    (state) => state.authentication.isAuthenticated
  );
  const cartItems = useSelector((state) => state.cart.products?.length);

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
          {user.role.toLowerCase() == "caterer" && (
            <NavLinkItem to="/products" label="My Products" />
          )}
          {(user.role.toLowerCase() != "caterer" || !user.role) && (
            <NavLinkItem to="/caterers" label="Caterers" />
          )}
          {isAuthenticated ? (
            <NavDropdownItem
              label={`${user.name || user.username}`}
              icon={<FontAwesomeIcon icon={faUser} />}
              dropdown={
                <UserDropDownMenu
                  authenticated={true}
                  name={user.name}
                  username={user.username}
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
          {(user.role.toLowerCase() != "caterer" || !user.role) && (
            <CartDropdownItem
              dropdown={<MiniShoppingCartDropdownMenu />}
              cartItemLength={cartItems}
            />
          )}
        </NavBar>
      </div>
    </header>
  );
};

export default PageHeader;
