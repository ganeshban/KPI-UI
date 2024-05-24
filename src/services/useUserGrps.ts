import ApiClient from "./ApiClient";

export interface UserGroupI {
  userGrpID: number;
  userGrpName: string;
}

const client = new ApiClient<UserGroupI>("usergrp");

export const getAllUserGroup = () => {
  const data = client.get("all").then((a) => a.data);
  return data;
};
export const deleteByID = (id: number) => {
  const data = client.delete(id).then((a) => a);
  return data;
};
export const save = (param: UserGroupI) => {
  const data = client.post("create", param);
  return data;
};
