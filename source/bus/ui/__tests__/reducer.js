// Actions
import { uiActions } from "../actions";

// Reducer
import { uiReducer } from "../reducer";

describe("UI reducer:", () => {
  test("Should return initial state by default", () => {
    expect(uiReducer(void 0, {})).toMatchInlineSnapshot(`
Immutable.Map {
  "isFetching": false,
  "isOnline": false,
}
`);
  });

  test("Should handle START_FETCHING action", () => {
    expect(uiReducer(void 0, uiActions.startFetching())).toMatchInlineSnapshot(`
Immutable.Map {
  "isFetching": true,
  "isOnline": false,
}
`);
  });

  test("Should handle STOP_FETCHING action", () => {
    const state = uiReducer(void 0, uiActions.startFetching());

    expect(uiReducer(state, uiActions.stopFetching())).toMatchInlineSnapshot(`
Immutable.Map {
  "isFetching": false,
  "isOnline": false,
}
`);
  });

  test("Should handle SET_ONLINE_STATE action", () => {
    expect(uiReducer(void 0, uiActions.setOnlineState()))
      .toMatchInlineSnapshot(`
Immutable.Map {
  "isFetching": false,
  "isOnline": true,
}
`);
  });

  test("Should handle SET_OFFLINE_STATE action", () => {
    const state = uiReducer(void 0, uiActions.setOnlineState());

    expect(uiReducer(state, uiActions.setOfflineState()))
      .toMatchInlineSnapshot(`
Immutable.Map {
  "isFetching": false,
  "isOnline": false,
}
`);
  });
});
