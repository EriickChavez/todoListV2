import { createReducer } from '@reduxjs/toolkit'
import UserModel from '../../models/UserModel';
import { newUser } from '../action/user-action';

interface UserState {
  userStore: {
    Users: UserModel[] | any[],
    userLogged: UserModel | null,
    messageError: string | null,
  }
}

const InitialState: UserState = {
  userStore: {
    Users: [],
    userLogged: null,
    messageError: null,
  }
}

const taskReducer = createReducer(InitialState, (builder) => {
  builder.addCase(newUser, (state, action) => {
    const isLogged = !!state.userStore.userLogged;
    const user = new UserModel();

    if (isLogged) {
      /* Ya hay un usuario loggeado*/

    } else {
      /* Nuevo usuario*/
      // Crear nuevo usuario
      const tmp_user = action.payload;
      user.createUserModelFromObject(tmp_user);

      // verificar que no exista
      const exists = false; //state.userStore.Users.find(e=> e.id == user.id);

      if (exists) {
        // Si existe el usuario marcar un error
        state.userStore.messageError = 'User already exists';
      } else {
        // No existe el usuario, agregarlo y loggearlo
        const tmp_array_users: UserModel[] = [];
        state.userStore.Users
        state.userStore.Users.forEach(us => {
          tmp_array_users.push(us)
        });
        tmp_array_users.push(user)


        state.userStore.Users = tmp_array_users;
        state.userStore.userLogged = user;
      }

    }

  })
})


export default taskReducer;