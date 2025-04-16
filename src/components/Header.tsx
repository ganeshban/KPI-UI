import { useState } from "react";
import logo from "../../public/vite.svg";
import { Link } from "react-router-dom";
import { URL_USER_GROUP_PAGE, URL_USER_PAGE } from "../utils/Constants";

const Header = () => {
  const [zoomSize, setZoomSize] = useState(100);
  const [toogle, setToogle] = useState(false);

  function btnClick(size: number) {
    let finalSize = zoomSize + size;
    if (finalSize >= 70 && finalSize <= 130) {
      if (size === 0) finalSize = 100;
      document.body.style.setProperty("zoom", finalSize + "%");
      setZoomSize(finalSize);
    }
  }
  const show = toogle ? " show" : "";
  const clsName = "mx-1 btn  btn-sm w-content";
  return (
    <>
      <header className="bg-success bg-gradient pb-2">
        <div className="text-end">
          <button
            className={clsName}
            onClick={() => {
              btnClick(5);
            }}
          >
            A+
          </button>
          <button
            onClick={() => {
              btnClick(0);
            }}
            className={clsName}
          >
            A
          </button>
          <button
            onClick={() => {
              btnClick(-5);
            }}
            className={clsName}
          >
            A-
          </button>
          <button
            onClick={() => {
              const attr = "data-bs-theme";
              const htmlNode = document.getElementsByTagName("html")[0];
              const darkMode = htmlNode.getAttribute(attr);
              darkMode === "dark"
                ? htmlNode.removeAttribute(attr)
                : htmlNode.setAttribute(attr, "dark");
              localStorage.setItem("theme", darkMode ? "" : "dark");
            }}
            className={clsName}
          >
            <i className={`material-icons`}>cloud</i>
          </button>
        </div>

        <nav className="navbar navbar-expand-md">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="Logo" className="img-fluid" />
              <h6>Home</h6>
            </Link>
            {/* <MyLink url={URL_USER_GROUP_PAGE} name="USER" />
            <MyLink url={URL_USER_GROUP_PAGE} name="USER" />
            <MyLink url={URL_USER_GROUP_PAGE} name="USER" />
            <MyLink url={URL_USER_GROUP_PAGE} name="USER" />
            <MyLink url={URL_USER_GROUP_PAGE} name="USER" />
            <MyLink url={URL_USER_GROUP_PAGE} name="USER" />
            <MyLink url={URL_USER_GROUP_PAGE} name="USER" />
            <MyLink url={URL_USER_GROUP_PAGE} name="USER" />
            <MyLink url={URL_USER_GROUP_PAGE} name="USER" /> */}
            <Link className="navbar-brand" to={URL_USER_PAGE}>
              <p>Users</p>
            </Link>
            <Link className="navbar-brand" to={URL_USER_GROUP_PAGE}>
              <p>User Group</p>
            </Link>
            <Link className="navbar-brand" to="/task">
              <p>Task</p>
            </Link>
            <Link className="navbar-brand" to="/date">
              <p>Date</p>
            </Link>
            <button
              className="navbar-toggler"
              onClick={() => {
                setToogle(!toogle);
              }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={"collapse navbar-collapse" + show}>
              <ul className="navbar-nav me-auto">
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
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export const MyLink = (name: string, url: string) => {
  return (
    <Link className="navbar-brand" to={url}>
      <p>{name}</p>
    </Link>
  );
};

export default Header;
