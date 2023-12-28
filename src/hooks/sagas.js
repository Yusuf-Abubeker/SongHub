// sagas.js
import { all } from 'redux-saga/effects';
import {  watchFetchSongDetails } from './songDetailSaga';
import { watchFetchMusic,watchDeleteMusic } from './songListSagas';

function* rootSaga() {
  yield all([
    watchFetchMusic(),
    watchFetchSongDetails(),
    watchDeleteMusic(),
  
  ]);
}

export default rootSaga;
