import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function Login() {
  const navigate = useNavigate();

  function loginHandler(event) {
    event.preventDefault();

    const checkLogin = true;
    if (checkLogin) {
      // redirect
      navigate("/dashboard");
    }
  }

  return (
    <form onSubmit={loginHandler}>
      <input type="text" name="username" />
      <input type="password" name="password" />
      <Button>Click Me!</Button>
    </form>
  );
}
