import { useMutation } from "@tanstack/react-query";
import { apiClient, Login, LoginResponse } from "../services/loginServices";
import { Response } from "../services/ApiClient";

export const useLogin = () => {
  return useMutation<Response, Error, Login>({
    mutationFn: apiClient.post,

    // loginServices.post("/user", login).then((res) => res),
    //   axios.post(loginServices.endpoint, login).then((res) => res.data),

    onSuccess: (resp: Response, payload: Login) => {
      localStorage.setItem("user", (resp.data as LoginResponse).token);
      return payload;
    },
  });
};
