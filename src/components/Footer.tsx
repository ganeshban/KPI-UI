import { Link } from "react-router-dom";
import { appName, currentYear, version } from "../utils/Constants";

function Footer() {
  return (
    <>
      <footer>
        <hr className="bordar-1 mx-5" />
        <div className="fw-lighter text-center">
          <Link className="link-success link-underline-opacity-0" to={"/terms"}>
            Privacy Policy
          </Link>
          <p className="fw-lighter fst-italic">
            Copyright &copy; {currentYear} {appName}, All rights reserved. |
            {version}
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
