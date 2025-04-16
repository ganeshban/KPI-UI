import axios from "axios";
const baseURL = import.meta.env.VITE_BACKEND_URL;
const axiosClient = axios.create({
  baseURL: baseURL,
});

class ApiClient<T, R> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getURL = (url?: string) => {
    const finalURL = url ? `${this.endpoint}/${url}` : this.endpoint;
    return axiosClient.get<T>(finalURL).then((res) => res.data);
  };
  get = () => {
    return this.getURL(this.endpoint);
  };

  postURL = (url?: string, data?: R) => {
    const finalURL = url ? `${this.endpoint}/${url}` : this.endpoint;

    axiosClient.post<R>(finalURL, data).then((res) => res.data);
  };
  post = (data?: R) => {
    return this.postURL(this.endpoint, data);
  };
  deleteURL = (url?: string) => {
    const finalURL = url ? `${this.endpoint}/${url}` : this.endpoint;
    return axiosClient.delete<T>(finalURL).then((res) => res.data);
  };
  delete = () => {
    return this.deleteURL(this.endpoint);
  };
}
export default ApiClient;
