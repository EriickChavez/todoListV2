import { createAction } from '@reduxjs/toolkit'
import TaskModel from '../../models/TaskModel'

// const increment = createAction<number>('counter/increment')

export const addTask = createAction<TaskModel>('task/add');
export const editTask = createAction<TaskModel>('task/edit');

