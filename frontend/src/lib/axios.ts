import Axios from "axios";

export const axios = Axios.create({
  baseURL: `http://localhost:8000/api`,
});

axios.interceptors.response.use((response) => {
  return response.data;
});