export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const CHECKED_TASK = "CHECKED_TASK";

export const addTodo = list => dispatch => {
    dispatch({
        type: ADD_TODO,
        payload: list
    })
}

export const removeTodo = list => dispatch => {
    dispatch({
        type: REMOVE_TODO,
        payload: list
    })
}
export const checkedTask = list => dispatch => {
    dispatch({
        type: CHECKED_TASK,
        payload: list
    })
}