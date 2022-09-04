import { createAction } from '@reduxjs/toolkit'
import UserModel from '../../models/UserModel';

export const newUser = createAction<UserModel>('new/user');

