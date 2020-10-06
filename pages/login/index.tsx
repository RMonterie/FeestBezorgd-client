import LoginForm from "../../components/LoginForm";
import BaseLayout from "../../layout/BaseLayout";

const login = () => {
  return (
    <BaseLayout title="Login">
      <LoginForm />
    </BaseLayout>
  );
};

export default login;
