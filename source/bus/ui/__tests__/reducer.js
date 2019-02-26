// Core
import { Map } from 'immutable';

// Actions
import { uiActions } from '../actions';

// Reducer
import { uiReducer } from '../reducer';

const initialState = Map({
    isFetching: false,
    isOnline:   false,
});

describe('UI reducer:', () => {
    test('Should return initial state by default', () => {
        expect(uiReducer(void 0, {})).toEqual(initialState);
    });

    test('Should handle START_FETCHING action', () => {
        expect(uiReducer(void 0, uiActions.startFetching())).toEqual(initialState.set('isFetching', true));
    });

    test('Should handle STOP_FETCHING action', () => {
        const state = uiReducer(void 0, uiActions.startFetching());

        expect(uiReducer(state, uiActions.stopFetching())).toEqual(initialState);
    });

    test('Should handle SET_ONLINE_STATE action', () => {
        expect(uiReducer(void 0, uiActions.setOnlineState())).toEqual(initialState.set('isOnline', true));
    });

    test('Should handle SET_OFFLINE_STATE action', () => {
        const state = uiReducer(void 0, uiActions.setOnlineState());

        expect(uiReducer(state, uiActions.setOfflineState())).toEqual(initialState);
    });
});
