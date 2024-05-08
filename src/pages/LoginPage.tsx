import { Link } from "react-router-dom";
import ApiClient from "../services/ApiClient";
import { useRef } from "react";

function LoginPage() {
  const username = useRef(null);
  const password = useRef(null);
  return (
    <div className="p-5 row justify-content-center">
      <h4 className="text-center">cIT App</h4>
      <div className="row"></div>
      <div className="col-sm-7 col-md-5 col-xl-4 col-xxl-3 border rounded justify-content-center">
        <div className="row text-center m-3">
          <h6>Log Into your Account</h6>
        </div>
        <div className="m-3 row justify-content-center">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            ref={username}
            className="form-control"
            id="username"
            placeholder="Enter your username"
          />
        </div>
        <div className="m-3 justify-content-center row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            ref={password}
            type="password"
            className="form-control"
            id="password"
            placeholder="Password will be here . ..."
          />
        </div>
        <div className="row mx-3 mt-5">
          <button
            onClick={() => {
              const client = new ApiClient("/user/all");
              username.current;
              const data = {
                userName: "ganesh",
                password: "ban",
              };
              const res = client.get();
              console.log(res, data);
            }}
            className="btn btn-outline-success"
          >
            Login
          </button>
        </div>
        <div className="row mx-3 mb-5">
          <Link
            className="link-offset-2 link-success link-underline link-underline-opacity-0"
            to="/reset"
          >
            Forget your Password ?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
