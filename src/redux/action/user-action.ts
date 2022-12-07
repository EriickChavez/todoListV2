import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import UserModel from '../../models/UserModel';
const URL = 'http://localhost:3001/signUp/'

export const newUser = createAsyncThunk(
    'new/user',
    async (user: UserModel) => {
        const newUser = new UserModel(user.username, user.password);
        console.log({ newUser });

        const response = await fetch(URL, {
            method: 'POST',
            body: JSON.stringify(
                newUser
            ),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        })
        const res = await response.json();
        return res;
    }
);

export const logout = createAction('logout');