import http from "./httpService";
import config from "../config.json";

const apiEndPoint =
  (process.env.REACT_APP_API_URL || config.apiUrl) + "/movies";

function movieUrl(id) {
  return `${apiEndPoint}/${id}`;
}

export function getMovies() {
  return http.get(apiEndPoint);
}

export function getMovie(movieId) {
  return http.get(movieUrl(movieId));
}

export function saveMovie(movie) {
  if (!movie._id) return http.post(apiEndPoint, movie);

  const body = { ...movie };
  delete body._id;
  return http.put(movieUrl(movie._id), body);
}

export function deleteMovie(movieId) {
  return http.delete(movieUrl(movieId));
}
