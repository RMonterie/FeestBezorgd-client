import { useDispatch } from "react-redux";
import Router from "next/router";

import { deAuthenticate } from "../../redux/actions/authActions";
import { clearCart } from "../../redux/actions/cartActions";
import LoginForm from "../Forms/LoginForm";

import "./UserDropdownMenu.scss";

interface UserDropdownMenuProps {
  authenticated: boolean;
  name?: string;
  username?: string;
}

/**
 * Dropdown menu that either displays the login form or
 * the details of a logged in user depending on if the
 * user is authenticated or not.
 *
 * @returns {JSX.Element}
 */
const UserDropdownMenu: React.FC<UserDropdownMenuProps> = ({
  authenticated,
  name,
  username,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="user-dropdown-menu">
      {authenticated ? (
        <>
          <div className="user-details">
            {name ? (
              <h3 className="customer-name">{name}</h3>
            ) : (
              <h3 className="customer-name">{username}</h3>
            )}
          </div>
          <p onClick={() => Router.push("/orders")} className="user-menu-item">
            My orders
          </p>
          <p className="user-menu-item">Edit my details</p>
          <p
            onClick={() => {
              dispatch(deAuthenticate());
              dispatch(clearCart());
              localStorage.clear();
              Router.push("/");
            }}
            className="logout"
          >
            Log out
          </p>
        </>
      ) : (
        <>
          <h3 className="login-title">Login</h3>
          <LoginForm role="customer" />
          <p
            onClick={() => Router.push("/catererLogin")}
            className="caterer-login-link"
          >
            Login as a caterer here
          </p>
        </>
      )}
    </div>
  );
};

export default UserDropdownMenu;
