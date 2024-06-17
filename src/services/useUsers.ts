import { useEffect, useState } from "react";
import ApiClient from "./ApiClient";
import { UserGroupI } from "./useUserGrps";

export interface UserI {
  id: number;
  username: string;
  password: string;
  fullName: string;
  email: string;
  status: false;
  userGroup: UserGroupI;
}

const client = new ApiClient<UserI>("user");
export const useGetAllUser = () => {
  const [users, setUsers] = useState<UserI[]>([]);
  useEffect(() => {
    const x = client.get("all").then((a) => a.data);
    x.then((a) => {
      console.log(a);
      setUsers(a);
    });
  }, [users]);
  return users;
};
