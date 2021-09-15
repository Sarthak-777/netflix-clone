import axios from "axios";

const baseURL = "https://api.themoviedb.org/3";

export function requestGetMovie(fetchLink) {
  const URL = baseURL + fetchLink;
  return axios.request({
    method: "get",
    url: URL,
  });
}
