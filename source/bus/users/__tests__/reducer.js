// Core
import { List, fromJS } from 'immutable';

// Actions
import { usersActions } from '../actions';

// Reducer
import { usersReducer } from '../reducer';

const initialState = List();

describe('Users reducer:', () => {
    test('Should return initial state by default', () => {
        expect(usersReducer(void 0, {})).toEqual(initialState);
    });

    test('Should handle FILL_USERS action', () => {
        expect(usersReducer(void 0, usersActions.fillUsers(__.users))).toEqual(fromJS(__.users));
    });

    test('Should handle CLEAR_USERS action', () => {
        const state = usersReducer(void 0, usersActions.fillUsers(__.users));

        expect(usersReducer(state, usersActions.clearUsers())).toEqual(initialState);
    });
});
