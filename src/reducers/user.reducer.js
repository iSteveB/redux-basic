import { ADD_USER_LIKE } from '../actions/user.action';
import { GET_USERS } from '../actions/user.action';

const initialState = {};

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return action.payload;
        case ADD_USER_LIKE:
            return state.map((post) => {
                if (post.id === action.payload.id) {
                    return {
                        ...post,
                        likes : action.payload.likes
                    };
                } else return post
            });
        default:
            return state;
    }
}
