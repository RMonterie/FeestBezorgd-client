import RegisterForm from "../../components/Forms/RegisterForm";
import BaseLayout from "../../layout/BaseLayout";

import "./RegisterPage.scss";

/**
 * Page that contains the register form.
 *
 */
const RegisterPage: React.FC = () => {
  return (
    <BaseLayout title="Register">
      <div className="register-content-container">
        <h2>Register as a new user</h2>
        <RegisterForm role="customer" />
      </div>
    </BaseLayout>
  );
};

export default RegisterPage;
