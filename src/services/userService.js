import http from "./httpService";
import config from "../config.json";

const apiEndPoint = (process.env.REACT_APP_API_URL || config.apiUrl) + "/users";

export function register(user) {
  return http.post(apiEndPoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}
