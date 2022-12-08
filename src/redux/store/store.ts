import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit'
// import { persistCombineReducers, persistReducer } from 'reduxjs-toolkit-persist';
import { persistReducer } from "redux-persist";
import thunk from 'redux-thunk';

import reducers from "../reducer";


const config = {
  key:'root',
  storage:AsyncStorage,
  version:1
};

// const persistedReducer = persistCombineReducers(config, reducers) 
const persistedReducer = persistReducer(config, reducers) 

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(thunk),
  // middleware:[thunk],
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch