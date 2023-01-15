import { combineReducers } from "@reduxjs/toolkit";
import tasks, { TaskState } from "./task-reducer";
import user, { UserState } from "./user-reducer";

export default combineReducers({
    tasks,
    user
})

export interface IRootState {
    user: UserState,
    tasks: TaskState
}


export const TYPE_STATUS = {
    SUCCESS: 'SUCCESS',
    INTERNAL_ERROR: 'INTERNAL_ERROR',
    FAILED: 'FAILED'
  }