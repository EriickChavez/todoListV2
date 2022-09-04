import { combineReducers } from "@reduxjs/toolkit";
import tasks from "./task-reducer";
import user from "./user-reducer";

export default combineReducers({
    tasks,
    user
})



