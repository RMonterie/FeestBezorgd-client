import React from "react";

import RegisterForm from "../../components/Forms/RegisterForm";

/**
 * Page for registering a caterer.
 */
const CatererRegisterPage: React.FC = () => {
  return (
    <div>
      <RegisterForm role="caterer" />
    </div>
  );
};

export default CatererRegisterPage;
