import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

// interceptors: - request
const token = "hijibijihijibiji";
api.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = "Bearer" + token;
    console.log(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// interceptors: - response
api.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (err) => {
    if (err.response) {
      // error come from server
      err.message = `
          Error from server: status: ${err.response.status} - message: ${err.response.statusText}`;
    }
    return Promise.reject(err);
  }
);
export default api;
