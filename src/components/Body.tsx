import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import PageNotFound from "../pages/PageNotFound";
import RequestResetPassword from "../pages/RequestResetPassword";
import Unauthorized from "../pages/Unauthorized";
import Users from "../pages/Users";
import UserGroup from "../pages/UserGroup";
import CreateDate from "../pages/CreateDate";
import Task from "../pages/Task";

function Body() {
  return (
    <Routes>
      <Route path={"/"} element={<LoginPage />} />
      <Route path={"/login"} element={<LoginPage />} />
      <Route path={"/reset"} element={<RequestResetPassword />} />
      <Route path={"/user"} element={<Users />} />
      <Route path={"/user-group"} element={<UserGroup />} />
      <Route path={"/date"} element={<CreateDate />} />
      <Route path={"/task"} element={<Task />} />
      <Route path={"/unauthorized"} element={<Unauthorized />} />
      <Route path={"/changepassword"} element={<RequestResetPassword />} />

      <Route path={"*"} element={<PageNotFound />} />
    </Routes>
  );
}

export default Body;

// userAccess4Apt
