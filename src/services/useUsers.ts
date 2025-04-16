import { useEffect, useState } from "react";
import ApiClient from "./ApiClient";
import { UserGroupI } from "./useUserGrps";

export interface User {
  id: number;
  username: string;
  password: string;
  fullName: string;
  email: string;
  status: false;
  userGroup: UserGroupI;
}

const client = new ApiClient<User>("user");
export const useGetAllUser = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const x = client.get("all").then((a) => a.data);
    x.then((a) => {
      console.log(a);
      setUsers(a);
    });
  }, [users]);
  return users;
};
