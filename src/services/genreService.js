import http from "./httpService";
import config from "../config.json";

const apiUrl = process.env.REACT_APP_API_URL || config.apiUrl;

export function getGenres() {
  return http.get(apiUrl + "/genres");
}
