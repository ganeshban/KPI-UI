import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import {
  URL_HOME_PAGE,
  URL_LOGIN_PAGE,
  URL_RESET_PASSWORD_PAGE,
  URL_USER_GROUP_PAGE,
  URL_USER_PAGE,
  URL_DATE_PAGE,
  URL_CHANGE_PASSWORD_PAGE,
  URL_SMS_PAGE,
  URL_TASK_PAGE,
  URL_TERMS_PAGE,
  URL_UNAUTHORIZED_PAGE,
} from "../utils/Constants";
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
      <Route path={URL_HOME_PAGE} element={<LoginPage />} />
      <Route path={URL_LOGIN_PAGE} element={<LoginPage />} />
      <Route path={URL_RESET_PASSWORD_PAGE} element={<ResetPassword />} />
      <Route path={URL_USER_PAGE} element={<Users />} />
      <Route path={URL_USER_GROUP_PAGE} element={<UserGroup />} />
      <Route path={URL_DATE_PAGE} element={<CreateDate />} />
      <Route path={URL_SMS_PAGE} element={<SMS />} />
      <Route path={URL_TASK_PAGE} element={<Task />} />
      <Route path={URL_UNAUTHORIZED_PAGE} element={<Unauthorized />} />
      <Route path={URL_CHANGE_PASSWORD_PAGE} element={<ResetPassword />} />
      <Route path={URL_TERMS_PAGE} element={<Terms />} />

      <Route path={"*"} element={<PageNotFound />} />
    </Routes>
  );
}

export default Body;

// userAccess4Apt
