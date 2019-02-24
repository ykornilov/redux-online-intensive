// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { types } from '../types';

// Workers
import { workers } from './workers';

function* watchUpdateName () {
    yield takeEvery(types.UPDATE_NAME_ASYNC, workers.updateName);
}

function* watchUpdateAvatar () {
    yield takeEvery(types.UPDATE_AVATAR_ASYNC, workers.updateAvatar);
}

export function* watchProfile () {
    yield all([
        call(watchUpdateName),
        call(watchUpdateAvatar)
    ]);
}
