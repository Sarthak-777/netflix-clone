import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    trendingMovies: [],
    actionMovies: [],
    netflixOriginals: [],
    topRated: [],
    horrorMovies: [],
  },
  reducers: {
    getMovie() {},
    setTrendingMovies(state, action) {
      state.trendingMovies = action.payload;
    },
    setActionMovies(state, action) {
      state.actionMovies = action.payload;
    },
    setNetflixOriginals(state, action) {
      state.netflixOriginals = action.payload;
    },
    setTopRated(state, action) {
      state.topRated = action.payload;
    },
    setHorrorMovies(state, action) {
      state.horrorMovies = action.payload;
    },
  },
});

export const {
  getMovie,
  setTrendingMovies,
  setActionMovies,
  setNetflixOriginals,
  setTopRated,
  setHorrorMovies,
} = movieSlice.actions;

export default movieSlice.reducer;
