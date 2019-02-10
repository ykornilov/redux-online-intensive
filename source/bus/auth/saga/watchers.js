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

function* watchAuthenticate () {
    yield takeEvery(types.AUTHENTICATE_ASYNC, workers.authenticate);
}

function* watchInitialize () {
    yield takeEvery(types.INITIALIZE_ASYNC, workers.initialize);
}

function* watchLogout () {
    yield takeEvery(types.LOGOUT_ASYNC, workers.logout);
}

export function* watchAuth () {
    yield all([
        call(watchSignup),
        call(watchLogin),
        call(watchAuthenticate),
        call(watchInitialize),
        call(watchLogout)
    ]);
}
