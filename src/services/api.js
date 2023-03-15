import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 3000,
});

instance.interceptors.request.use(
  function (config) {
    const token = window.localStorage.getItem("token");
    if (token) {
      instance.defaults.headers.common["Authorization"] = token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
