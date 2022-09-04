import {  createReducer } from '@reduxjs/toolkit'
import UserModel from '../../models/UserModel';
import { newUser } from '../action/user-action';


interface UserState {
    Users: UserModel[],
    userLogged: UserModel | null,
    messageError: string | null,
}

const InitialState:UserState = {
    Users: [],
    userLogged: null,
    messageError: null,
}

const taskReducer = createReducer(InitialState, (builder) => {
  builder.addCase(newUser, (state, action) => {
    
    const isLogged = state.userLogged !== null;
    const user = new UserModel();

    if(isLogged){
        /* Ya hay un usuario loggeado*/
        
    }else{
        /* Nuevo usuario*/
        // Crear nuevo usuario
        const tmp_user = action.payload;
        user.createUserModelFromObject(tmp_user);
        
        // verificar que no exista
        const exists = state.Users.find(e=> e.id == user.id);

        if(exists){
          // Si existe el usuario marcar un error
          state.messageError = 'User already exists';
        }else{
          // No existe el usuario, agregarlo y loggearlo
          const tmp_array_users:UserModel[] = [...state.Users, user];
          
          state.Users = tmp_array_users;
          state.userLogged = user;
        }

    }

  })
})


export default taskReducer;