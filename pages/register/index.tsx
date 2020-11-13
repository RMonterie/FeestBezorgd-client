import RegisterForm from "../../components/RegisterForm";
import BaseLayout from "../../layout/BaseLayout";

import "./RegisterPage.scss";

const RegisterPage = () => {
  return (
    <BaseLayout title="Register">
      <div className="register-content-container">
        <h2>Register as a new user</h2>
        <RegisterForm />
      </div>
    </BaseLayout>
  );
};

export default RegisterPage;
