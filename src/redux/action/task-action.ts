import { createAction } from '@reduxjs/toolkit'
import TaskModel from '../../models/TaskModel'

export const addTask = createAction<TaskModel>('task/add');
export const editTask = createAction<TaskModel>('task/edit');

