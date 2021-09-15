const APIKEY = "9cf4e09bc69e9849477a8ac79d29a205";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en=us`,
  fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en=us`,
  fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_generes=28`,
  fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27
    `,
};

export default requests;
