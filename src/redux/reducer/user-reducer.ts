import { createReducer } from '@reduxjs/toolkit'
import { TYPE_STATUS } from '.';
import UserModel from '../../models/UserModel';
import { loginRequest, logout, newUser } from '../action/user-action';

export interface UserState {
  userStore: {
    Users: UserModel[] | any[],
    userLogged: UserModel | null,
    messageError: string | null,
  },
  loading: boolean
}

const InitialState: UserState = {
  userStore: {
    Users: [],
    userLogged: null,
    messageError: null,
  },
  loading: false
}



const taskReducer = createReducer(InitialState, (builder) => {

  /* SIGN UP */
  builder.addCase(newUser.pending, (state, action) => {
    state.loading = true;
  });
  builder.addCase(newUser.fulfilled, (state, action) => {
    // FIXME: remove switch (involves the api)
    switch (action.payload.response.type) {
      case TYPE_STATUS.SUCCESS:
        state.userStore.userLogged = action.payload.response.user;
        state.userStore.Users = [...state.userStore.Users, action.payload.response.user];
        break;
      case TYPE_STATUS.FAILED:
      case TYPE_STATUS.INTERNAL_ERROR:
        state.userStore.userLogged = null;
        state.userStore.messageError = action.payload.response.message;
        break;
    }

    state.loading = false;
    console.log({ state });

  });
  builder.addCase(newUser.rejected, (state, action) => {
    state.loading = false;
  });

  /* LOG-OUT */
  builder.addCase(logout, (state, action) => {
    state.userStore.userLogged = null;
    state = InitialState;
  });

  /* LOG-IN */
  builder.addCase(loginRequest.pending, (state, action) => {
    state.loading = true;
  });
  builder.addCase(loginRequest.fulfilled, (state, action) => {
    // FIXME: remove switch (involves the api)
    switch (action.payload.response.type) {
      case TYPE_STATUS.SUCCESS:
        state.userStore.userLogged = action.payload.response.user;
        state.userStore.Users = [...state.userStore.Users, action.payload.response.user];
        break;
      case TYPE_STATUS.FAILED:
      case TYPE_STATUS.INTERNAL_ERROR:
        state.userStore.userLogged = null;
        state.userStore.messageError = action.payload.response.message;
        break;
    }

    state.loading = false;
  });
  builder.addCase(loginRequest.rejected, (state, action) => {
    state.loading = false;
  });


})


export default taskReducer;