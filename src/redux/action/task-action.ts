import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import TaskModel from '../../models/TaskModel'

// export const addTask = createAction<TaskModel>('task/add');
export const editTask = createAction<TaskModel>('task/edit');
import { BASE_URL, LOG_IN, SIGN_UP } from '../../constants/url'
const ADD_TASK = 'addTask/'
const GET_TASK = 'getTasks/'

export const addTask = createAsyncThunk(
    'add/task',
    async (task: TaskModel) => {
        console.log({task});
        
        const response = await fetch(BASE_URL + ADD_TASK, {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        })
        const res = await response.json();
        return {
            response: res
        };
    }
);

export const tasksRequest = createAsyncThunk(
    'get/tasks',
    async (idUser: string) => {

        const response = await fetch(BASE_URL + GET_TASK, {
            method: 'POST',
            body: JSON.stringify({ idUser }),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        })
        const res = await response.json();
        return {
            response: res
        };
    }
);
