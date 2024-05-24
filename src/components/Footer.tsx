import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();
  const appName = import.meta.env.VITE_APP_NAME;
  const version = "v" + import.meta.env.VITE_APP_VERSION;
  return (
    <>
      <footer>
        {/* <div className="container text-center">
          <h3>Contact Us</h3>
          <p>Email: banganesh98@gmail.com</p>
          <p>Phone: +1 (720) 751 - 9966</p>
        </div> */}
        <hr className="bordar-1 mx-5" />
        <div className="fw-lighter text-center">
          <Link className="link-success link-underline-opacity-0" to={"#"}>
            Privacy Policy
          </Link>
          <p className="fw-lighter fst-italic">
            Copyright &copy; {year} {appName}, All rights reserved. | {version}
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
