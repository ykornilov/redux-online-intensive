// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { types } from '../types';

// Workers
import { workers } from './workers';

function* watchSignup () {
    yield takeEvery(types.SIGNUP_ASYNC, workers.signup);
}

function* watchLogin () {
    yield takeEvery(types.LOGIN_ASYNC, workers.login);
}

export function* watchAuth () {
    yield all([call(watchSignup), call(watchLogin)]);
}
