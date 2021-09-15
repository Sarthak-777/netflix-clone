import { call, put } from "redux-saga/effects";
import { requestGetMovie } from "../requests/movies";
import {
  setNetflixOriginals,
  setActionMovies,
  setTrendingMovies,
  setTopRated,
  setHorrorMovies,
} from "../../ducks/movieSlice";

export function* handleGetMovie(action) {
  try {
    const { fetchLink, title } = action.payload;
    const response = yield call(requestGetMovie, fetchLink);
    const { data } = response;
    if (title === "Netflix Originals") {
      yield put(setNetflixOriginals(data));
    } else if (title === "Trending Now") {
      yield put(setTrendingMovies(data));
    } else if (title === "Top Rated") {
      yield put(setTopRated(data));
    } else if (title === "Action Movies") {
      yield put(setActionMovies(data));
    } else if (title === "Horror Movies") {
      yield put(setHorrorMovies(data));
    }
  } catch (error) {
    console.log(error);
  }
}
