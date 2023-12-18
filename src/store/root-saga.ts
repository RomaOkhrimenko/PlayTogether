import { all, fork } from 'redux-saga/effects';
import { watchSettingsProfileSaga } from '@/store/setting-profile/sagas';

const rootSaga = function* () {
  yield all([
    fork(watchSettingsProfileSaga)
    // Other forks
  ]);
};

export default rootSaga;