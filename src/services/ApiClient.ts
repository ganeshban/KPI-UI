import axios from "axios";
const baseURL = import.meta.env.VITE_BACKEND_URL;
const axiosClient = axios.create({
  baseURL: baseURL,
});
interface Response<T> {
  data: T[];
  count: number;
}

class ApiClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = async (url?: string) => {
    const finalURL = url ? `${this.endpoint}/${url}` : this.endpoint;
    const res = (await axiosClient.get<Response<T>>(finalURL)).data;
    return res;
  };

  post = async (url?: string, data?: T) => {
    const finalURL = url ? `${this.endpoint}/${url}` : this.endpoint;
    const res = await axiosClient.post<T>(finalURL, data);
    return res.data;
  };
  delete = async (id?: number) => {
    const finalURL = id ? `${this.endpoint}/${id}` : this.endpoint;
    const res = (await axiosClient.delete<Response<T>>(finalURL)).data;
    return res.data;
  };
}
export default ApiClient;
