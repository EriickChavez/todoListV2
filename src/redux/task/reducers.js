import { combineReducers } from "redux";
import { ADD_TODO, REMOVE_TODO, CHECKED_TASK } from "./actions";


const initialStates = {
    todosList: []
}
export const todosReducers = (state = initialStates, action) => {
    switch (action.type) {
        case ADD_TODO:
            if (action.payload) {

            }
            return { ...state };
        case REMOVE_TODO:
            return { ...state };
        case CHECKED_TASK: {
            return { ...state }
        }
        default:
            return initialStates;
    }
}

export default combineReducers({
    todosList: todosReducers
})