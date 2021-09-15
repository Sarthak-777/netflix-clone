import { takeEvery, takeLatest } from "redux-saga/effects";
import { getMovie } from "../ducks/movieSlice";
import { handleGetMovie } from "./handlers/movies";

export function* watcherSaga() {
  yield takeEvery(getMovie.type, handleGetMovie);
}
