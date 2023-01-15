import { createReducer } from '@reduxjs/toolkit'
import { TYPE_STATUS } from '.';
import TaskModel from '../../models/TaskModel';
import { addTask, editTask, tasksRequest } from '../action/task-action';

export interface TaskState {
  tasks: TaskModel[]
}

const InitialState: TaskState = {
  tasks: [],
}

const taskReducer = createReducer(InitialState, (builder) => {

  builder.addCase(addTask.pending, (state, action) => {
    console.log("[addTask.pending]", { action });
  })
  builder.addCase(addTask.fulfilled, (state, action) => {
    if (action.payload.response.type !== TYPE_STATUS.SUCCESS) {
      /* MESNAJE DE ERROR */
      return;
    }
    const tmp_task: TaskModel = action.payload.response.task;

    const task = new TaskModel();
    task.setValues(tmp_task);

    state.tasks.push(task)
  })
  builder.addCase(addTask.rejected, (state, action) => {
    console.log("[addTask.rejected]", { action });
  })

  builder.addCase(tasksRequest.pending, (state, action) => {
    console.log("[addTask.pending]", { action });
  })
  builder.addCase(tasksRequest.fulfilled, (state, action) => {
    console.log("[addTask.fulfilled]", { action });
    state.tasks = action.payload.response
  })
  builder.addCase(tasksRequest.rejected, (state, action) => {
    console.log("[addTask.rejected]", { action });
  })


})


export default taskReducer;