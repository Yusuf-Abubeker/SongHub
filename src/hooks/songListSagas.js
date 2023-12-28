import { call, put, takeLatest } from "redux-saga/effects";
import apiClient from "../services/api-client";
import {
  setSongs,
  setSongsLoading,
  setSongError,
  setDeleting,
  setDeleteError,
  clearDeleteStatus,
} from "../store/reducers/songSlice";

function* fetchMusicSaga() {
  try {
    yield put(setSongsLoading());
    console.log("Sending request...");
    const response = yield call(apiClient.get, "/yusuf/songs");
    yield put(setSongs(response.data));
    console.log("Response:", response);
  } catch (error) {
    yield put(setSongError(error.message));
  }
}

function* deleteMusicSaga(action) {
  const { musicId } = action.payload;
  try {
    yield put(setDeleting());
    yield call(apiClient.delete, `/yusuf/songs/${musicId}`);
    yield put(clearDeleteStatus());
    document.location.reload();
  } catch (error) {
    yield put(setDeleteError(error.message));
  }
}

export function* watchFetchMusic() {
  yield takeLatest("fetchMusic", fetchMusicSaga);
}
export function* watchDeleteMusic() {
  yield takeLatest("deleteMusic", deleteMusicSaga);
}
