import LoginForm from "../LoginForm";
import PageLink from "../page/PageLink";

import "./DropdownMenu.scss";

const DropdownMenu = () => {
  return (
    <div className="dropdown-menu">
      <LoginForm buttonText="Login" />
      <PageLink to="/register" className="register-link">
        Register
      </PageLink>
    </div>
  );
};

export default DropdownMenu;
