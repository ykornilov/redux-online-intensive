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

function* watchRemovePost () {
    yield takeEvery(types.REMOVE_POST_ASYNC, workers.removePost);
}

function* watchLikePost () {
    yield takeEvery(types.LIKE_POST_ASYNC, workers.likePost);
}

function* watchUnlikePost () {
    yield takeEvery(types.UNLIKE_POST_ASYNC, workers.unlikePost);
}

export function* watchPosts () {
    yield all([
        call(watchCreatePost),
        call(watchFetchPosts),
        call(watchRemovePost),
        call(watchLikePost),
        call(watchUnlikePost)
    ]);
}
