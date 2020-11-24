import { useDispatch } from "react-redux";

import { deAuthenticate } from "../../redux/actions/authActions";
import LoginForm from "../LoginForm";
import PageLink from "../page/PageLink";

import "./UserDropdownMenu.scss";

interface UserDropdownMenuProps {
  authenticated: boolean;
  name?: string;
  email?: string;
  address?: string;
}

const UserDropdownMenu: React.FC<UserDropdownMenuProps> = ({
  authenticated,
  name,
  email,
  address,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="dropdown-menu">
      {authenticated ? (
        <>
          <div className="user-details">
            <h3>{name}</h3>
            <p>{address}</p>
            <p>{email}</p>
          </div>
          <p>My orders</p>
          <p>Edit my data</p>
          <button onClick={() => dispatch(deAuthenticate())}>Log out</button>
        </>
      ) : (
        <>
          <LoginForm buttonText="Login" />
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
