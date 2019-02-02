// Core
import { fromJS, List } from 'immutable';

// Instruments
import { FILL_POSTS, ADD_NEW_POST } from './types';

const initialState = List();

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILL_POSTS:
            return fromJS(action.payload);

        case ADD_NEW_POST:
            return state.unshift(fromJS(action.payload));

        default:
            return state;
    }
};
