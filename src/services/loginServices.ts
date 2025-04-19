import ApiClient from "./ApiClient";
import { User } from "./useUsers";
export interface Login {
  username: string;
  password: string;
}
export interface LoginResponse {
  token: string;
  user: User;
}
export const apiClient = new ApiClient<Login>("login");

export const login = (loginParam: Login) => {
  return apiClient.post(loginParam);
};
