import { useRef } from "react";
import { Link } from "react-router-dom";

const RequestResetPassword = () => {
  const refUserName = useRef<HTMLInputElement>(null);
  return (
    <div className="p-5 row justify-content-center">
      <h4 className="text-center">cIT App</h4>
      <div className="col-sm-8 col-md-6 col-lg-5 col-xl-4 col-xxl-3 border rounded justify-content-center">
        <div className="row text-center m-3">
          <h6>Find your account</h6>
          <hr />
          <p>
            Please enter your user name or email and submit for reset password
          </p>
        </div>
        <div className="m-3 row justify-content-center">
          <input
            type="text"
            ref={refUserName}
            className="form-control"
            id="username"
            placeholder="Username or email"
          />
        </div>
        <div className="row mx-3 my-5">
          <button
            className="btn btn-outline-success"
            onClick={() => {
              console.log(refUserName.current?.value);
            }}
          >
            Request Password Change
          </button>
          <Link
            className="my-3 link-success link-underline-opacity-0"
            to="/login"
          >
            {"back to login"}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default RequestResetPassword;
