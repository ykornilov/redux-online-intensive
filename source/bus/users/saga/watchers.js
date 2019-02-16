// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { types } from '../types';

// Workers
import { workers } from './workers';

function* watchFetchUsers () {
    yield takeEvery(types.FETCH_USERS_ASYNC, workers.fetchUsers);
}

export function* watchUsers () {
    yield all([call(watchFetchUsers)]);
}
