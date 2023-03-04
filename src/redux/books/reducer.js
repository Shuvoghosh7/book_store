import { ADDED, LOADED } from "./actionType";
import initialState from "./initialState";

const nextTodoId = (books) => {
    const maxId = books.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1;
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADED:
            return action.payload;
        case ADDED:
            return[
                ...state,
                {
                    ...action.payload
                }
            ]
        default:
            return state
    }
}

export default reducer;