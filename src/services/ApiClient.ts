import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:8080",
});

class ApiClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = async () => {
    const res = await axiosClient.get<T>(this.endpoint);
    console.log(res);
    return res.data;
  };

  post = async (data: T) => {
    const res = await axiosClient.post<T>(this.endpoint, data);
    return res.data;
  };
}
export default ApiClient;
