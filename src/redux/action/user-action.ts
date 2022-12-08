import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import UserModel from '../../models/UserModel';
import { BASE_URL, LOG_IN, SIGN_UP } from '../../constants/url'

export type loginType = {
    username: string,
    password: string
}

export const newUser = createAsyncThunk(
    'new/user',
    async (user: UserModel) => {
        const new_User = new UserModel(user.username, user.password);
        console.log({ new_User });

        const response = await fetch(BASE_URL + SIGN_UP, {
            method: 'POST',
            body: JSON.stringify(
                new_User
            ),
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

export const loginRequest = createAsyncThunk(
    'login/user',
    async (user: loginType) => {
        console.log("[user]", user);

        const response = await fetch(BASE_URL + LOG_IN, {
            method: 'POST',
            body: JSON.stringify(user),
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


export const logout = createAction('logout');