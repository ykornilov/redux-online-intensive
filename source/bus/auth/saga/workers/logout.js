// Core
import { put, apply } from 'redux-saga/effects';
import { replace } from 'react-router-redux';
import { actions } from 'react-redux-form';

// Instruments
import { api } from '../../../../REST';
import { authActions } from '../../../auth/actions';
import { uiActions } from '../../../ui/actions';
import { postsActions } from '../../../posts/actions';
import { usersActions } from '../../../users/actions';
import { profileActions } from '../../../profile/actions';
import { book } from '../../../../navigation/book';

export function* logout () {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.auth.logout);

        if (response.status !== 204) {
            const { message } = yield apply(response, response.json);

            throw new Error(message);
        }
    } catch (error) {
        yield put(uiActions.emitError(error, 'logout worker'));
    } finally {
        yield apply(localStorage, localStorage.removeItem, ['token']);
        yield apply(localStorage, localStorage.removeItem, ['remember']);
        yield put(postsActions.clearPosts());
        yield put(usersActions.clearUsers());
        yield put(profileActions.clearProfile());
        yield put(uiActions.stopFetching());
        yield put(authActions.logout());
        yield put(actions.reset('forms.user'));
        yield put(replace(book.login));
    }
}
