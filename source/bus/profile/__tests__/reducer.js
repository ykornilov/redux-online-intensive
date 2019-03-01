// Actions
import { profileActions } from "../actions";

// Reducer
import { profileReducer } from "../reducer";

describe("Profile reducer:", () => {
  test("Should return initial state by default", () => {
    expect(profileReducer(void 0, {})).toMatchInlineSnapshot(`
Immutable.Map {
  "id": "",
  "firstName": "",
  "lastName": "",
  "avatar": "",
  "token": "",
}
`);
  });

  test("Should handle FILL_PROFILE action", () => {
    expect(profileReducer(void 0, profileActions.fillProfile(__.userProfile)))
      .toMatchInlineSnapshot(`
Immutable.Map {
  "id": "TEST_ID",
  "firstName": "Walter",
  "lastName": "White",
  "avatar": "TEST_AVATAR",
  "token": "TEST_TOKEN",
}
`);
  });

  test("Should handle UPDATE_AVATAR action", () => {
    expect(profileReducer(void 0, profileActions.updateAvatar(__.url)))
      .toMatchInlineSnapshot(`
Immutable.Map {
  "id": "",
  "firstName": "",
  "lastName": "",
  "avatar": "https://www.url.com",
  "token": "",
}
`);
  });

  test("Should handle CLEAR_PROFILE action", () => {
    expect(
      profileReducer(void 0, profileActions.clearProfile())
    ).toMatchInlineSnapshot(`Immutable.Map {}`);
  });
});
