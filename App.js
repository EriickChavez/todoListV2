import React from 'react'
import Application from './src/routes/index'
import { Provider } from 'react-redux'
import reduxStore from "./src/redux/task/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  const { store, persistor } = reduxStore();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Application />
      </PersistGate>
    </Provider>
  )
}