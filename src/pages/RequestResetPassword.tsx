import { Link } from "react-router-dom";
import { appName } from "../utils/Constants";
import Card from "../components/Card";
import TextBox from "../components/TextBox";
import { useRef } from "react";

const RequestResetPassword = () => {
  const username = useRef<HTMLInputElement>(null);
  const form = useRef<HTMLFormElement>(null);
  return (
    <div className="p-5 row justify-content-center">
      <h4 className="text-center">{appName}</h4>
      <Card
        title="Find your account"
        className="col-sm-8 col-md-6 col-lg-5 col-xl-4 col-xxl-3 border rounded justify-content-center"
      >
        <div className="row text-center">
          <p>
            Please enter your user name or email and submit for reset password
          </p>
        </div>
        <div className="mt-3 row justify-content-center">
          <form noValidate ref={form}>
            <TextBox
              controller={username}
              required={true}
              classname="form-control"
              id="username"
              icon="person"
              label="Username"
            />
          </form>
        </div>
        <div className="row mx-1 mt-3">
          <button
            className="btn btn-outline-success"
            onClick={(event) => {
              form.current?.classList.add("was-validated");
              event.preventDefault();
            }}
          >
            Request Password Change
          </button>
          <Link
            className="my-1 link-success link-underline-opacity-0"
            to="/login"
          >
            {"back to login"}
          </Link>
        </div>
      </Card>
    </div>
  );
};
export default RequestResetPassword;
