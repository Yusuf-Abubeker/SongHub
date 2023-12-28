import { call, put, takeLatest } from 'redux-saga/effects';
import apiClient from '../services/api-client';
import {
  setSongs,
  setSongsLoading,
  setSongError,
  setDeleting,
  setDeleteError,
  clearDeleteStatus,
} from './reducers/songSlice';

function* fetchMusicSaga() {
  try {
    yield put(setSongsLoading()); // Set loading status
    const response = yield call(apiClient.get, '/yusuf/songs');
    yield put(setSongs(response.data)); // Set music data
  } catch (error) {
    yield put(setSongError(error.message)); // Set error
  }
}



function* deleteMusicSaga(action) {
  const { musicId } = action.payload;
  try {
    yield put(setDeleting());
    yield call(apiClient.delete, `/yusuf/songs/${musicId}`);
    yield put(clearDeleteStatus());
  } catch (error) {
    yield put(setDeleteError(error.message));
  }
}

export function* watchFetchMusic() {
  yield takeLatest('fetchMusic', fetchMusicSaga);
}
export function* watchDeleteMusic() {
  yield takeLatest('deleteMusic', deleteMusicSaga);
}

export default rootSaga;
