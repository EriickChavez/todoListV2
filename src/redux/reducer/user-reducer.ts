import { createReducer } from '@reduxjs/toolkit'
import UserModel from '../../models/UserModel';
import { logout, newUser } from '../action/user-action';

interface UserState {
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
    switch (action.payload.type) {
      case TYPE_STATUS.SUCCESS:
        state.userStore.userLogged = action.payload.user;
        state.userStore.Users = [...state.userStore.Users, action.payload.user];
        break;
      case TYPE_STATUS.FAILED:
      case TYPE_STATUS.INTERNAL_ERROR:
        state.userStore.userLogged = null;
        state.userStore.messageError = action.payload.message;
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
    console.log("[logout]",{action});
    state.userStore.userLogged = null;
    state = InitialState;
  });

})

const TYPE_STATUS = {
  SUCCESS: 'SUCCESS',
  INTERNAL_ERROR: 'INTERNAL_ERROR',
  FAILED: 'FAILED'
}

export default taskReducer;