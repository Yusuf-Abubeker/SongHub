import { call, put, takeLatest } from 'redux-saga/effects';
import apiClient from '../services/api-client';
import {
  setSongDetail,
  setSongDetailLoading,
  setSongDetailError,
} from '../store/reducers/songDetailSlice';

function* fetchSongDetailsSaga(action) {
  const { songId } = action.payload;
  try {
    yield put(setSongDetailLoading()); 

    const songResponse = yield call(apiClient.get, `/yusuf/songs/${songId}`);

    let audioUrl = null;
    if (songResponse.data.songFile) {
      const audioResponse = yield call(apiClient.get, `/yusuf/songs/${songId}/audio`, {
        responseType: 'blob',
      });

      const blob = new Blob([audioResponse.data], {
        type: audioResponse.headers['content-type'],
      });
      audioUrl = URL.createObjectURL(blob);
    }

    yield put(setSongDetail({ song: songResponse.data, audioUrl }));
  } catch (error) {
    yield put(setSongDetailError(error.message)); 
  }
}

export function* watchFetchSongDetails() {
  yield takeLatest('fetchSongDetails', fetchSongDetailsSaga);
}
