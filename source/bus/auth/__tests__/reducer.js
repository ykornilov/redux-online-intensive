// Core
import { Map } from 'immutable';

// Reducer
import { authReducer } from '../reducer';

// Actions
import { authActions } from '../actions';

const initialState = Map({
    isAuthenticated: false,
    isInitialized:   false,
});

describe('Auth reducer: ', () => {
    test('Should return initial state by default', () => {
        expect(authReducer(void 0, {})).toEqual(initialState);
    });

    test('Should handle AUTHENTICATE action', () => {
        expect(authReducer(void 0, authActions.authenticate())).toEqual(initialState.set('isAuthenticated', true));
    });

    test('Should handle INITIALIZE action', () => {
        expect(authReducer(void 0, authActions.initialize())).toEqual(initialState.set('isInitialized', true));
    });

    test('Should handle LOGOUT action', () => {
        expect(authReducer(void 0, authActions.logout())).toEqual(initialState.set('isAuthenticated', false));
    });
});
