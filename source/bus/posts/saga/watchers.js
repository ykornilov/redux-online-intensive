// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { types } from '../types';

// Workers
import { workers } from './workers';

function* watchCreatePost () {
    yield takeEvery(types.CREATE_POST_ASYNC, workers.createPost);
}

function* watchFetchPosts () {
    yield takeEvery(types.FETCH_POSTS_ASYNC, workers.fetchPosts);
}

export function* watchPosts () {
    yield all([call(watchCreatePost), call(watchFetchPosts)]);
}
