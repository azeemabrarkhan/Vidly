import http from "./httpService";
import config from "../config.json";

const { apiUrl } = config;

export function getGenres() {
  return http.get(apiUrl + "/genres");
}
