import React from "react";
import BaseLayout from "../../layout/BaseLayout";

import LoginForm from "../../components/Forms/LoginForm";

import "./CatererLoginPage.scss";

/**
 * Page that renders a loginform. For caterer use.
 */
const CatererLoginPage: React.FC = () => {
  return (
    <div className="login-page-container">
      <div className="caterer-login-container">
        <h2>Caterer Login</h2>
        <LoginForm role="caterer" />
      </div>
    </div>
  );
};

export default CatererLoginPage;
