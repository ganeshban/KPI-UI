import axios from "axios";
const baseURL = import.meta.env.VITE_BACKEND_URL;
const axiosClient = axios.create({
  baseURL: baseURL,
});
export interface Response {
  requestAt: string;
  responseAt: string;
  status: [];
  count: number;
  data: object;
}
class ApiClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  const getHeaders=()=>{
    return {
      
    }
  }

  getURL = (url: string) => {
    return axiosClient.get<Response>(url).then((res) => res.data);
  };
  get = () => {
    return this.getURL(this.endpoint);
  };

  postURL = (url: string, data?: T) => {
    return axiosClient.post<Response>(url, data).then((res) => res.data);
  };
  post = (data?: T) => {
    return this.postURL(this.endpoint, data);
  };
  deleteURL = (url: string) => {
    return axiosClient.delete<Response>(url).then((res) => res.data);
  };
  delete = () => {
    return this.deleteURL(this.endpoint);
  };
}
export default ApiClient;
