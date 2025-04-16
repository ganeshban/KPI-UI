import ApiClient from "./ApiClient";
import { User } from "./useUsers";
export interface Login {
  username: string;
  password: string;
}
export interface Response {
  token: string;
  user: User;
}
export const apiClient = new ApiClient<Login, Response>("login");

// export const useLogin = () => {
//   return (loginParam: Login) => apiClient.post(loginParam);
// };
