import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
const SMS = lazy(() => import("../pages/SMS"));
const Terms = lazy(() => import("../pages/Terms"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));
const ResetPassword = lazy(() => import("../pages/RequestResetPassword"));
const Unauthorized = lazy(() => import("../pages/Unauthorized"));
const Users = lazy(() => import("../pages/Users"));
const UserGroup = lazy(() => import("../pages/UserGroup"));
const CreateDate = lazy(() => import("../pages/CreateDate"));
const Task = lazy(() => import("../pages/Task"));

function Body() {
  return (
    <Routes>
      <Route path={"/"} element={<LoginPage />} />
      <Route path={"/login"} element={<LoginPage />} />
      <Route path={"/reset"} element={<ResetPassword />} />
      <Route path={"/user"} element={<Users />} />
      <Route path={"/user-group"} element={<UserGroup />} />
      <Route path={"/date"} element={<CreateDate />} />
      <Route path={"/sms"} element={<SMS />} />
      <Route path={"/task"} element={<Task />} />
      <Route path={"/unauthorized"} element={<Unauthorized />} />
      <Route path={"/changepassword"} element={<ResetPassword />} />
      <Route path={"/terms"} element={<Terms />} />

      <Route path={"*"} element={<PageNotFound />} />
    </Routes>
  );
}

export default Body;

// userAccess4Apt
