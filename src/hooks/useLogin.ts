import { useMutation } from "@tanstack/react-query";
import { apiClient, Login, Response } from "../services/loginServices";

export const useLogin = () => {
  return useMutation<Response, Error, Login>({
    mutationFn: apiClient.post,

    // loginServices.post("/user", login).then((res) => res),
    //   axios.post(loginServices.endpoint, login).then((res) => res.data),

    onSuccess: (resp: Response, payload: Login) => {
      localStorage.setItem("user", resp.token);
      return payload;
    },
  });
};
