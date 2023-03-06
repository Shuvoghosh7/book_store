import { ADDED, EDITED, LOADED } from "./actionType";
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
            return [
                ...state,
                {
                    ...action.payload
                }
            ]
        case EDITED:
            const { id, newText } = action.payload;
            return state.map((todo) => {
                if (todo.id !== id) {
                    return todo;
                }
                return {
                    ...todo,
                    newText,
                };
            });
        default:
            return state
    }
}

export default reducer;