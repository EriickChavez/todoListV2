import React from 'react'
import {SafeAreaView, Text, View} from 'react-native'
import Application from './src/routes/index'
import { store } from './src/redux/store/store'
import { Provider } from 'react-redux'

export type Props = { };

const App = (props:Props) => (
    <Provider store={store}>
        <Application />
    </Provider>
)


export default App;


