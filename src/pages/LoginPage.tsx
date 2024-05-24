import { Link } from "react-router-dom";
// import ApiClient from "../services/ApiClient";
import { useRef } from "react";
import TextBox from "../components/TextBox";

function LoginPage() {
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const form = useRef<HTMLFormElement>(null);
  return (
    <div className="p-5 row justify-content-center">
      <h4 className="text-center">cIT App</h4>
      <form
        className="needs-validation col-sm-7 col-md-5 col-xl-4 col-xxl-3 border rounded"
        noValidate
        ref={form}
      >
        <div className="row text-center m-3">
          <h6>Log Into your Account</h6>
        </div>

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
        <div className="row mt-5 px-2">
          <button
            type="submit"
            onClick={(event) => {
              // const client = new ApiClient("/user/all");
              // username.current;
              // const data = {
              //   userName: "ganesh",
              //   password: "ban",
              // };
              // const res = client.get();
              // console.log(res, data);
              // event.preventDefault();

              form.current?.classList.add("was-validated");
              event.preventDefault();
            }}
            className="btn btn-outline-success"
          >
            Login
          </button>
        </div>
        <div className="row mb-5">
          <Link
            className="link-offset-2 link-success link-underline link-underline-opacity-0"
            to="/reset"
          >
            Forget your Password ?
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
