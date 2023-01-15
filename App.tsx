import React from 'react'
import Application from './src/routes/index'
import { store } from './src/redux/store/store'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { Text, SafeAreaView } from "react-native";

export type Props = { };

const persistor = persistStore(store)

const App = (props:Props) => {
    const renderApplication = () => <Application />
    
    return (
        <Provider store={store}>
            <PersistGate 
                loading={null}
                children={renderApplication} 
                persistor={persistor} 
            />
        </Provider>
    )
}

export default App;
import Pruebas from "./pruebas";

