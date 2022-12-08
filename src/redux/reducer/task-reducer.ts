import {  createReducer } from '@reduxjs/toolkit'
import TaskModel from '../../models/TaskModel';
import { addTask, editTask } from '../action/task-action';

export interface TaskState {
    tasks: TaskModel[]
}

const InitialState:TaskState = {
    tasks: [],
}

const taskReducer = createReducer(InitialState, (builder) => {
  builder.addCase(addTask, (state, action) => {
    const tmp_task:TaskModel = action.payload;
    
    const task = new TaskModel();
    task.setValues(tmp_task);

    state.tasks.push(task)
  })
  builder.addCase(editTask, (state, action) => {
    const tmp_task:TaskModel = action.payload;
    
    const index = state.tasks.findIndex(elem => elem.id == tmp_task.id);
    const task = new TaskModel();
    task.setValues(tmp_task);
    
    state.tasks[index] = task;
  })
})


export default taskReducer;