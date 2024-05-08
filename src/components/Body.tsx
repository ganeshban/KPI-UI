import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import PageNotFound from "../pages/PageNotFound";
import RequestResetPassword from "../pages/RequestResetPassword";

function Body() {
  return (
    <Routes>
      <Route path={"/"} element={<LoginPage />} />
      <Route path={"/login"} element={<LoginPage />} />
      <Route path={"/reset"} element={<RequestResetPassword />} />
      <Route
        path={"/signup"}
        element={
          <PageNotFound
            code={403}
            title="UNAUTHORIZED | Heasdfjkasdabfdk"
            message="you don't have enough permission to view this page."
          />
        }
      />
      <Route path={"/changepassword"} element={<RequestResetPassword />} />

      <Route path={"*"} element={<PageNotFound />} />
    </Routes>
  );
}

export default Body;

// userAccess4Apt
