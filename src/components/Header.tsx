import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  const [zoomSize, setZoomSize] = useState(100);

  function handleClick(size: number) {
    let finalSize = zoomSize + size;
    if (finalSize >= 70 && finalSize <= 130) {
      if (size === 0) finalSize = 100;
      document.body.style.setProperty("zoom", finalSize + "%");
      setZoomSize(finalSize);
    }
  }
  const clsName = "mx-1 px-1 btn btn-outline-light btn-sm w-content";
  return (
    <>
      <div className="container container-lg">hello</div>
      <div className="m-1">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <h6>Home</h6>
            </Link>
            <Button
              text="Users"
              clsName="btn-outline-light btn"
              // color="danger"
            ></Button>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" to="/signup">
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/notfound">
                    Not Found
                  </Link>
                </li>
              </ul>
              <div className="d-flex" role="search">
                <ul className="nav-item navbar-nav ">
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">
                      Sign Up
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        {/* //////// */}

        <button
          onClick={() => {
            handleClick(5);
          }}
          className={clsName}
        >
          A+
        </button>
        <button
          onClick={() => {
            handleClick(0);
          }}
          className={clsName}
        >
          A
        </button>
        <button
          onClick={() => {
            handleClick(-5);
          }}
          className={clsName}
        >
          A-
        </button>
      </div>
    </>
  );
};

export default Header;
