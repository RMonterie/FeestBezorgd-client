import { useDispatch } from "react-redux";

import { deAuthenticate } from "../../redux/actions/authActions";
import LoginForm from "../LoginForm";
import PageLink from "../page/PageLink";

import "./DropdownMenu.scss";

interface dropdownMenuProps {
  authenticated: boolean;
  name?: string;
  email?: string;
  address?: string;
}

const DropdownMenu: React.FC<dropdownMenuProps> = ({
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
          <p>Shopping Cart</p>
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

export default DropdownMenu;
