import { Link } from "react-router-dom";
// import ApiClient from "../services/ApiClient";
import { useRef } from "react";
import TextBox from "../components/TextBox";
import { appName } from "../utils/Constants";
import Card from "../components/Card";
import { useLogin } from "../hooks/useLogin";

function LoginPage() {
  const response = useLogin();
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const form = useRef<HTMLFormElement>(null);
  const errorMsg = response.error && (
    <div className="alert alert-danger">{response.error.message}</div>
  );
  return (
    <div className="p-5 row justify-content-center">
      <h4 className="text-center">{appName}</h4>
      <Card
        title="Log into your Account"
        className="col-sm-8 col-md-6 col-lg-5 col-xl-4 col-xxl-3 border rounded justify-content-center"
      >
        <form noValidate ref={form}>
          <TextBox
            controller={username}
            label="Username"
            icon="person"
            required={true}
            autocomplete="username"
          />
          <TextBox
            controller={password}
            autocomplete="new-password"
            minlength={8}
            label="Password"
            icon="lock"
            required={true}
            type="password"
          />
          {errorMsg}
          <div className="row mt-5 px-2">
            <button
              type="submit"
              onClick={(event) => {
                form.current?.classList.add("was-validated");
                event.preventDefault();
                if (!form.current?.checkValidity()) {
                  return;
                }
                response.mutate({
                  username: username.current!.value,
                  password: password.current!.value,
                });
              }}
              className="btn btn-outline-success"
            >
              Login
            </button>
          </div>
          <div className="row">
            <Link
              className="link-offset-2 link-success link-underline link-underline-opacity-0"
              to="/reset"
            >
              Forget your Password ?
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default LoginPage;
