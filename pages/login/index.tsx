import LoginForm from "../../components/LoginForm";
import BaseLayout from "../../layout/BaseLayout";
import PageLink from "../../components/page/PageLink";

import "./LoginPage.scss";

const LoginPage = () => {
  return (
    <BaseLayout title="Login">
      <div className="login-content-container">
        <h2>Log in existing user</h2>
        <LoginForm buttonText="Login" />
        <div>
          <p>
            Don't have an account? Register{" "}
            <PageLink to="/register" className="link">
              here.
            </PageLink>
          </p>
        </div>
      </div>
    </BaseLayout>
  );
};

export default LoginPage;
