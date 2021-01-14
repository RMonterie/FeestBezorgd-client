import { useDispatch } from "react-redux";

import { deAuthenticate } from "../../redux/actions/authActions";
import { clearCart } from "../../redux/actions/cartActions";
import LoginForm from "../Forms/LoginForm";
import PageLink from "../page/PageLink";

import "./UserDropdownMenu.scss";

interface UserDropdownMenuProps {
  authenticated: boolean;
  name?: string;
  email?: string;
  address?: string;
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
  email,
  address,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="user-dropdown-menu">
      {authenticated ? (
        <>
          <div className="user-details">
            <h3 className="customer-name">{name}</h3>
          </div>
          <p>My orders</p>
          <p>Edit my details</p>
          <p
            onClick={() => {
              dispatch(deAuthenticate());
              dispatch(clearCart());
            }}
            className="logout"
          >
            Log out
          </p>
        </>
      ) : (
        <>
          <h3 className="login-title">Login</h3>
          <LoginForm />
          <p>
            Don't have an account? Register{" "}
            <PageLink to="/register" className="link">
              here.
            </PageLink>
          </p>
        </>
      )}
    </div>
  );
};

export default UserDropdownMenu;
