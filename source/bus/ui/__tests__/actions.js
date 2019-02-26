// Types
import { types } from '../types';

// Actions
import { uiActions } from '../actions';

describe('UI actions:', () => {
    test('startFetching', () => {
        expect(uiActions.startFetching()).toEqual({
            type: types.START_FETCHING,
        });
    });

    test('stopFetching', () => {
        expect(uiActions.stopFetching()).toEqual({
            type: types.STOP_FETCHING,
        });
    });

    test('setOnlineState', () => {
        expect(uiActions.setOnlineState()).toEqual({
            type: types.SET_ONLINE_STATE,
        });
    });

    test('setOfflineState', () => {
        expect(uiActions.setOfflineState()).toEqual({
            type: types.SET_OFFLINE_STATE,
        });
    });

    test('emitError', () => {
        expect(uiActions.emitError(new Error())).toEqual({
            type:    types.EMIT_ERROR,
            payload: new Error(),
            error:   true,
            meta:    null,
        });
    });
});
