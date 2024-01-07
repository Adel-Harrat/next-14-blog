import LoginForm from "@/components/loginForm/LoginForm";

export const metadata = {
  title: "Login",
  description: "This is the login page",
};

const LoginPage = async () => {
  return <LoginForm />;
};

export default LoginPage;
